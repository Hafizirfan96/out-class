const express = require("express");
const router = express.Router();
const {
  authorize,
  authorizeIfUser,
} = require("../../../middlewares/authorization");
const { validateObjectId } = require("../../../helpers/validation");
const { userRoles } = require("../../../models/User");
const { ADMIN } = userRoles;
const { QuizBank } = require("../../../models/QuizBank");
const {
  QuizBankQA,
  validateQuizBankQA,
  validateUpdateQuizBankQA
} = require("../../../models/QuizBankQA");
const { boolean } = require("joi");
const csv = require("csvtojson");
const fileStorage = require("../../../services/fileStorage");
const { getFileName } = require("../../../helpers/file");
const { csvUpload } = require("../../../middlewares/upload");
const request = require("request");
router.post(
  "/csv/:id",
  authorize(ADMIN),
  csvUpload.single("csv"),
  async (req, res) => {
    const { file, params, body } = req;
    const { name, type, duration } = body;
    const { id } = params;
    if (!file) {
      return res.sendApiResponse({
        status: 400,
        message: "Please upload csv file",
      });
    }
    const uniqueName = getFileName(file.originalname);
    const uploadResult = await fileStorage.uploadFile(
      "files/" + uniqueName,
      file.buffer
    );
    var image = uploadResult.Location;
    const jsonData = await csv().fromStream(request.get(image));
    let mcqs = [];
    for (let element of jsonData) {
      let data = {
        question: element.question,
        options: [
          element.option_a,
          element.option_b,
          element.option_c,
          element.option_d,
        ],
        correctAnswer: [element.correct_answer],
        explanation: element.explanation,
      };
      mcqs.push(data);
    }

    const quizBankQA = await  QuizBankQA.findById(id);
    if (!quizBankQA) {
      return res.sendApiResponse({
        status: 400,
        message: "Something went wrong",
      });
    }
    const mcqsArr =  quizBankQA.mcqs.concat(mcqs);
    quizBankQA.mcqs = mcqsArr;
    await quizBankQA.save();
    res.sendApiResponse({ data: quizBankQA });
  }
);

router.post("/:quizBank", async (req, res) => {
  const { quizBank } = req.params;
  const { error, value } = validateQuizBankQA(req.body);
  if (error)
    return res.sendApiResponse({
      status: 400,
      message: error.details[0].message,
    });
    const isQuizBank = await QuizBank.findById(quizBank);
    if(!isQuizBank){
      res.sendApiResponse({status:400,message:"Quiz Bank not found"})
    }
    value.quizBank=quizBank;
  let quizBankQA = await new QuizBankQA(value).save();
  isQuizBank.quizBankQA.push(quizBankQA._id);
  await isQuizBank.save();
  res.sendApiResponse({ data: { quizBankQA, isQuizBank } });
});
router.post("/mcqs/:id", async (req, res) => {
  const { id } = req.params;
  const { question,options,correctAnswer,explanation } = req.body;
  const mcqs=[
    {
      question,options,correctAnswer,explanation
    }
  ]
  
  const quizBankQA = await QuizBankQA.findOne({
    _id: id,
    isDeleted: false,
  });
  if (!quizBankQA) {
    return res.sendApiResponse({ message: "Quiz Bank QA not found." });
  }
  const mcqsArr = quizBankQA.mcqs.concat(mcqs);
  quizBankQA.mcqs = mcqsArr;
  await quizBankQA.save();
  res.sendApiResponse({ data: quizBankQA });
});
router.get("/mcqs", async (req, res) => {
  const { id,mcq } = req.query;
  const quizBankQA = await QuizBankQA.findOne({ _id: id, isDeleted: false });
  if (!quizBankQA || !quizBankQA.mcqs) {
    return res.sendApiResponse({
      message: "Quiz Bank QA does not exist.",
    });
  }
  let index = quizBankQA.mcqs.findIndex((e) => e._id == mcq);
  const data = quizBankQA.mcqs[index];
  
  if (!data) {
    return res.sendApiResponse({
      status:400,
     message: "MCQs  does not exist"})
  }res.sendApiResponse({ data: data });

});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const quizBankQA = await QuizBankQA.findOne({ _id: id, isDeleted: false });
  if (!quizBankQA) {
    return res.sendApiResponse({status:400, message: "Quiz Bank QA not found." });
  }
  res.sendApiResponse({ data: quizBankQA });
});
router.get("/all/:id", async (req, res) => {
  const {id}=req.params;
  const quizBankQA = await QuizBankQA.find({quizBank:id,
    isDeleted: false,
  });
  if (!quizBankQA.length) {
    return res.sendApiResponse({ message: "Quiz Bank QA not found." });
  }
  res.sendApiResponse({ data: quizBankQA });
});
router.put("/primary/:id",authorize(ADMIN), async (req, res) => {
  const { id } = req.params;
  const {error,value}=validateUpdateQuizBankQA(req.body);
  if(error){
    return res.sendApiResponse({status:400,message:error.details[0].message});
  }
  const quizBankQA = await QuizBankQA.findOneAndUpdate({ _id: id, isDeleted: false },value,{new:true});
  if (!quizBankQA) {
    return res.sendApiResponse({
      message: "Quiz Bank QA does not exist.",
    });
  }
  res.sendApiResponse({ data: quizBankQA });
});
router.put("/:id",authorize(ADMIN), async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const quizBankQA = await QuizBankQA.findOne({ _id: id, isDeleted: false });
  if (!quizBankQA || !quizBankQA.mcqs) {
    return res.sendApiResponse({
      message: "Quiz Bank QA does not exist.",
    });
  }
  var index = quizBankQA.mcqs.findIndex((e) => e._id == body._id);
  quizBankQA.mcqs.splice(index, 1, body);
  await quizBankQA.save();
  res.sendApiResponse({ data: quizBankQA });
});
router.put("/publish/:id",authorize(ADMIN), async (req, res) => {
  const { id } = req.params;
  const { published } = req.body;
  if (typeof published !== "boolean") {
    return res.sendApiResponse({
      status: 400,
      message: "Invalid Publish property.",
    });
  }
  const quizBankQA = await QuizBankQA.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { published },
    { new: true }
  );
  if (!quizBankQA) {
    return res.sendApiResponse({ message: "Quiz Bank QA not found." });
  }
  res.sendApiResponse({ data: quizBankQA });
});

router.get("/full_qa_detail/:id", authorizeIfUser(), async (req, res) => {
  const { id } = req.params;

  let quizBankQA;

  if (validateObjectId(id)) {
    quizBankQA = await QuizBankQA.findById(id);
  }

  if (!quizBankQA)
    return res.sendApiResponse({
      status: 404,
      message: "Quiz Bank QA Not Found",
    });

  const data = { quizBankQA };
  if (data.type === "paid") {
    let user;

    if (req.authSession && req.authSession.user) user = req.authSession.user;
    if (!user)
      return res.sendApiResponse({
        data: { canShow: false },
        // status: 400,
        // message: "To View this lesson you need to enroll in this course",
      });

    if (user.role === TEACHER || user.role === TEACHER_ASSISTANT) {
      return res.sendApiResponse({
        data: { canShow: false },
        // status: 400,
        // message: "To View this lesson you need to enroll in this course",
      });
    } else if (user.role === STUDENT) {
      const myQuizBankQA = await QuizBankQA.findOne({
        owner: { $in: user._id },
      });

      if (!myQuizBankQA)
        return res.sendApiResponse({
          data: { canShow: false },
          // status: 400,
          // message: "To View this lesson you need to enroll in this course",
        });
    }
  }

  data.canShow = true;
  res.sendApiResponse({ data });
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const quizBankQA = await QuizBankQA.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  res.sendApiResponse({ data: quizBankQA });
});

module.exports = router;
