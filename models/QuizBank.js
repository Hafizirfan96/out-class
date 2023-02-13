const mongoose = require("mongoose");
const Joi = require("joi");

const quizBankSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  quizBankQA: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "quizbankqa",
    },
  ],
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  image: {
    type: String,
  },
  flag: {
    type: String,
  },
  flagColor: {
    type: String,
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

function validateQuizBank(input) {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    price: Joi.number().min(1).required(),
  });
  return schema.validate(input);
}

const QuizBank = mongoose.model("quizbank", quizBankSchema);

module.exports = {
  QuizBank,
  validateQuizBank,
};
