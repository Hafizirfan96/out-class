const express = require("express");
const router = express.Router();
const {
  QuizBankRecord,
  validateQuizBankRecord,
} = require("../../../models/QuizBankRecord");

router.post("/", async (req, res) => {
  const { error, value } = validateQuizBankRecord(req.body);
  if (error) {
    return res.sendApiResponse({
      status: 400,
      message: error.details[0].message,
    });
  }
  let quiz = value.solvedQuiz;
  let mcqsMarks = 0;
  const quizArr = quiz.map((x) => {
    const isEqual =
      x.answer.length === x.correctAnswer.length &&
      x.answer.every((element, index) => element === x.correctAnswer[index]);
    if (isEqual) {
      x.isCorrect = true;
      mcqsMarks += 1;
    } else {
      x.isCorrect = false;
    }
  });
  value.mcqsMarks = mcqsMarks;
  quiz = quizArr;
  console.log(quiz, value.mcqsMarks);
  const record = await new QuizBankRecord(value).save();
  return res.sendApiResponse({ data: record });
});

router.get("/user_record", async (req, res) => {
  const { user, quizBankQA } = req.query;
  const record = await QuizBankRecord.findOne({
    user,
    quizBankQA,
    isDeleted: false,
  }).populate("quizBank");
  if (!record) {
    return res.sendApiResponse({
      status: 400,
      message: "Quiz Bank Record not Found.",
    });
  }
  return res.sendApiResponse({
    data: record,
  });
});

router.get("/:user", async (req, res) => {
  const { user } = req.params;
  const record = await QuizBankRecord.find({
    user,
    isDeleted: false,
  });
  if (!record.length) {
    return res.sendApiResponse({
      status: 400,
      message: "Quiz Bank Record not Found.",
    });
  }
  return res.sendApiResponse({
    data: record,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const record = await QuizBankRecord.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  if (!record) {
    return res.sendApiResponse({
      status: 400,
      message: "Record Not found.",
    });
  }
  return res.sendApiResponse({
    data: record,
    message: "Quiz Bank Record Deleted Successfully.",
  });
});

module.exports = router;
