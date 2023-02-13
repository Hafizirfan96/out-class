const mongoose = require("mongoose");

const footerLinksSchema = new mongoose.Schema({
  foot1: [
    {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
     
    },
  ],
  foot2: [
    {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
     
    },
  ],
  foot3: [
    {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
    
    },
  ],
  foot4: [
    {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
     
    },
  ],
});

module.exports.FooterLinks = mongoose.model("FooterLinks", footerLinksSchema);
