const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const mediaPath = config.get("mediaPath");
const mediaPath2 = config.get("mediaPathB2");
const lessonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    slug: {
      type: String,
      default: "",
      index: true,
    },

    metaTitle: {
      type: String,
      default: "",
    },
    metaDescription: {
      type: String,
      default: "",
    },
    metaKeyWords: {
      type: String,
      default: "",
    },

    chapter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chapter",
    },

    type: {
      type: String,
      default: "video",
    },

    accessibility: {
      type: String,
      default: "paid",
    },
    video: {
      type: String,

      get: (id)=> {
        if (!id) return "";
        return `${mediaPath}uploads/videos/${id}/playlist.m3u8`;
      },
    },
    newVideo: {
      type: String,

      get: (id) => {
        if (!id) return "";
        return `${mediaPath2}uploads/test/${id}/playlist.m3u8`;
      },
    },
    isBulk: {
      type: Boolean,
      default: false,
    },
    videoCaptions: {
      type: String,
      default: "",
    },

    videoQualities: {
      type: [String],
      default: [],
    },
    rawVideo: {
      type: String,
      get: (video) => {
        if (!video) return "";
        return `${mediaPath}uploads/test/${video}`;
      },
    },
    quiz: {
      doc: { type: String },
      pdfName: { type: String },
      desc: { type: String },
    },
    videoProcessingStatus: {
      type: String,
    },

    published: {
      type: Boolean,
      default: false,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toObject: { getters: true, setters: true },
    toJSON: { getters: true, setters: true },
    runSettersOnQuery: true,
  }
);

const Lesson = mongoose.model("lesson", lessonSchema);

function validateLesson(data) {
  const schema = Joi.object({
    name: Joi.string().trim().min(1).required(),
    slug: Joi.string().trim().min(1).required(),
    type: Joi.string().min(1).required(),
    accessibility: Joi.string().min(1).required(),
    chapter: Joi.objectId().required(),
  });
  return schema.validate(data);
}

function validateBulkLesson(data) {
  const schema = Joi.object({
    chapter: Joi.objectId().required(),
  });
  return schema.validate(data);
}

function validateMetaTags(data) {
  const schema = Joi.object({
    metaTitle: Joi.string().trim().required().allow(""),
    metaDescription: Joi.string().trim().required().allow(""),
    metaKeyWords: Joi.string().trim().required().allow(""),
  });
  return schema.validate(data);
}

function validateQuizDocument(data) {
  const schema = Joi.object({
    pdfName: Joi.string().required(),
    desc: Joi.string().required(),
  });
  return schema.validate(data);
}

module.exports = {
  Lesson,
  validateLesson,
  validateMetaTags,
  validateBulkLesson,
  validateQuizDocument
};