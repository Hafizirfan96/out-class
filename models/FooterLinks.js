const Joi = require("joi");
const mongoose = require("mongoose");

const footerLinksSchema = mongoose.Schema({
  name: {
    type: String,
  },
  link: {
    type: String,
  },
  sortOrder: {
    type: Number,
    default: 0,
  },
});

const FooterLinks = mongoose.model("FooterLinks", footerLinksSchema);

function validateFooterLinks(footerLinks) {
  const schema = Joi.object({
    name: Joi.string().required(),
    link: Joi.string().required(),
  });
  return schema.validate(footerLinks);
}

function validateFooterLinksUponUpdate(footerLinks) {
  const schema = Joi.object({
    name: Joi.string(),
    link: Joi.string(),
  });
  return schema.validate(footerLinks);
}

exports.FooterLinks = FooterLinks;
exports.validateFooterLinks = validateFooterLinks;
exports.validateFooterLinksUponUpdate = validateFooterLinksUponUpdate;
