const multer = require("multer");
const { getFileName } = require("../helpers/file");
const multerS3 = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");
const path = require("path");
const uuid = require("uuid");
//memory storage
const storage = multer.memoryStorage();

//temp storage

const audioStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/audios");
  },
  filename: function (req, file, cb) {
    var fileName = getFileName(file.originalname);
    cb(null, fileName);
  },
});

//temp storage
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/images");
  },
  filename: function (req, file, cb) {
    var fileName = getFileName(file.originalname);
    cb(null, fileName);
  },
});

const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/videos");
  },
  filename: function (req, file, cb) {
    var fileName = getFileName(file.originalname);
    cb(null, fileName);
  },
});

exports.imageUpload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 100,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|)$/i)) {
      cb(new Error("Please upload an image file."));
    }
    cb(undefined, true);
  },
});

exports.captionUpload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 250,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(srt|vtt)$/)) {
      cb(new Error("Please upload a Caption file (.srt, .vtt)."));
    }
    cb(undefined, true);
  },
});

exports.audioUpload = multer({
  storage: audioStorage,

  limits: {
    fileSize: 1024 * 1024 * 101,
  },

  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp3|wav|)$/)) {
      cb(new Error("Please upload an image file."));
    }
    cb(undefined, true);
  },
});

exports.videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 1024 * 1024 * 201,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|flv|mov|mkv)$/)) {
      cb(new Error("Please upload a video file."));
    }
    cb(undefined, true);
  },
});

exports.documentUpload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },

  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf|txt|doc|docx|epub|)$/)) {
      cb(new Error("Please upload an document file."));
    }
    cb(undefined, true);
  },
});

let s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIAJ3ATYIZJJA55OTJA",
    secretAccessKey: "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",
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

exports.bulkVideo = multer({
  storage: multerS3({
    s3: s3,
    bucket: "outclasslms",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `uploads/test/${uuid.v4()}${ext}`);
    },
  }),
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|flv|mov|mkv)$/)) {
     return cb(new Error("Please upload a video file."));
    }
    cb(undefined, true);
  },
});
exports.csvUpload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },

  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(csv)$/)) {
      cb(new Error("Please upload an csv file."));
    }
    cb(undefined, true);
  },
});