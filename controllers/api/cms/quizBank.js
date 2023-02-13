const express = require("express");
const router = express.Router();
const { getFileName } = require("../../../helpers/file");
const { imageUpload } = require("../../../middlewares/upload");
const fileStorage = require("../../../services/fileStorage");
const { validateObjectId } = require("../../../helpers/validation");
const {
  authorize,
  authorizeIfUser,
} = require("../../../middlewares/authorization");
const { userRoles } = require("../../../models/User");
const { ADMIN } = userRoles;
const { QuizBank, validateQuizBank } = require("../../../models/QuizBank");
const { QuizBankQA } = require("../../../models/QuizBankQA");

router.post("/", imageUpload.single("image"), async (req, res) => {
  const { file, body } = req;
  const { error, value } = validateQuizBank(body);
  if (error)
    return res.sendApiResponse({
      status: 400,
      message: error.details[0].message,
    });
  if (file) {
    const uniqueName = getFileName(file.originalname);
    const uploadResult = await fileStorage.uploadFile(
      "images/" + uniqueName,
      file.buffer
    );
    value.image = uploadResult.Location;
  }
  let quizBank = await new QuizBank(value).save();
  res.sendApiResponse({ data: quizBank });
});
router.get("/", authorize(), async (req, res) => {
  const quizBank = await QuizBank.find({
    isDeleted: false,
  });
  if (!quizBank.length) {
    return res.sendApiResponse({
      status: 400,
      message: "Quiz Bank not found.",
    });
  }
  res.sendApiResponse({ data: quizBank });
});
router.get("/enrolled", authorize(), async (req, res) => {
  const user = req.authSession.user;
  const userId = user._id;
  const enrolledQuizBank = await QuizBank.find({
    isDeleted: false,
    published: true,
    owner: {
      $in: [userId],
    },
  });
  const quizBank = await QuizBank.find({ isDeleted: false, published: true });
  if (!enrolledQuizBank) {
    return res.sendApiResponse({ message: "Quiz Bank not found." });
  }
  res.sendApiResponse({ data: { enrolledQuizBank, quizBank } });
});
router.put("/publish/:id", async (req, res) => {
  const { id } = req.params;
  const { published } = req.body;
  if (typeof published !== "boolean") {
    return res.sendApiResponse({
      status: 400,
      message: "Invalid Publish property.",
    });
  }
  const quizBank = await QuizBank.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { published },
    { new: true }
  );
  if (!quizBank) {
    return res.sendApiResponse({ message: "Quiz Bank not found." });
  }
  res.sendApiResponse({ data: quizBank });
});
router.put("/:id", imageUpload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { body, file } = req;
  const { name, price, flag, flagColor } = body;
  if (file) {
    const uniqueName = getFileName(file.originalname);
    const uploadResult = await fileStorage.uploadFile(
      "images/" + uniqueName,
      file.buffer
    );
    var image = uploadResult.Location;
  }
  const quizBank = await QuizBank.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { name, price, flag, flagColor, image },
    { new: true }
  );
  res.sendApiResponse({ data: quizBank });
});

router.get(
  "/full_quizbank_detail/:id",
  authorizeIfUser(),
  async (req, res) => {
    const { id } = req.params;

    let user;
    if (req.authSession && req.authSession.user) user = req.authSession.user;
    let quizBank;
    if (validateObjectId(id)) {
      quizBank = await QuizBank.findById(id);
    } 

    if (!quizBank)
      return res.sendApiResponse({
        status: 400,
        message: "Invalid Quiz Bank ID.",
      });

    const quizBankQA = await QuizBank.find({
_id:id,
      published: true,
      isDeleted: false,
    })
      .populate("quizBankQA")
      .sort("sortOrder");

    let isEnrolled = false;
    if (user) {
      if (user.role === ADMIN) {
        isEnrolled = true;
      } else if (user.role === TEACHER || user.role === TEACHER_ASSISTANT) {
        isEnrolled = true;
      }
    } else {
      const myQuizBank = await QuizBank.findOne({
        owner: { $in: user._id },
      });

      if (myQuizBank) {
        isEnrolled = true;
      }
    }

    const data = { quizBankQA };
    data.isEnrolled = isEnrolled;
    res.sendApiResponse({ data });
  }
);

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const quizBank = await QuizBank.findOne({ _id: id, isDeleted: false }).populate("quizBankQA");
  if (!quizBank) {
    return res.sendApiResponse({ message: "Quiz Bank not found." });
  }
  res.sendApiResponse({ data: quizBank });
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const quizBank = await QuizBank.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  res.sendApiResponse({ data: quizBank });
});
module.exports = router;
