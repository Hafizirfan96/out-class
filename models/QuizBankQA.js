const mongoose = require("mongoose");
const Joi = require("joi");

const quizBankQASchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    enum: ["Free", "Paid"],
    default: "Paid",
  },
  quizBank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizbank",
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  mcqs: [
    {
      question: {
        type: String,
      },
      options: [{ type: String }],
      answer: [{ type: String }],
      correctAnswer: [
        {
          type: String,
        },
      ],
      explanation: {
        type: String,
      },
    },
  ],
  duration: {
    type: Number,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

function validateQuizBankQA(input) {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    type: Joi.string().min(1).required(),
    duration: Joi.number().required(),
  });
  return schema.validate(input);
}

function validateUpdateQuizBankQA(input) {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    type: Joi.string().min(1).required(),
    duration: Joi.number().required(),
  });
  return schema.validate(input);
}

const QuizBankQA = mongoose.model("quizbankqa", quizBankQASchema);

module.exports = {
  QuizBankQA,
  validateQuizBankQA,
  validateUpdateQuizBankQA
};
//  mcqs: Joi.array()
//       .items(
//         Joi.object({
//           question: Joi.string().required(),
//           options: Joi.array().required(),
//           correctAnswer: Joi.array().required(),
//           explanation: Joi.string().required(),
//         })
//       )
//       .required(),