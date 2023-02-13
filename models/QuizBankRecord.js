const mongoose = require("mongoose");
const Joi = require("joi");

const quizBankRecordSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  quizBankQA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizbankqa",
  },
  quizBank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizbank",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  solvedQuiz: [{ type: Object }],
  mcqsMarks: {
    type: Number,
    default: 0,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

function validateQuizBankRecord(input) {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    quizBankQA: Joi.objectId().required(),
    quizBank: Joi.objectId().required(),
    user: Joi.objectId().required(),
    solvedQuiz: Joi.array()
      .items(
        Joi.object({
          question: Joi.string().required(),
          options: Joi.array().required(),
          answer: Joi.array().required(),
          correctAnswer: Joi.array().required(),
          explanation: Joi.string().required(),
        })
      )
      .required(),
  });
  return schema.validate(input);
}

const QuizBankRecord = mongoose.model("quizbankrecord", quizBankRecordSchema);

module.exports = {
  QuizBankRecord,
  validateQuizBankRecord,
};
