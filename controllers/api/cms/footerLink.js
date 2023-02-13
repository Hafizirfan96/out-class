const express = require("express");
const router = express.Router();
const { FooterLinks } = require("../../../models/FooterLink");

router.post("/footer_one", async (req, res) => {
  try {
    const { body } = req;
    const footer = await FooterLinks.findOne({});
    if (!footer || !footer.foot1) {
      console.log("create");
      var link = await FooterLinks.create({ foot1: [body] });
      return res.sendApiResponse({ data: link });
    } else {
      console.log("push");
      var link = await FooterLinks.findOneAndUpdate(
        {},
        { $push: { foot1: body } },
        { new: true }
      );
      return res.sendApiResponse({ data: link });
    }
  } catch (error) {
    throw error;
  }
});
router.post("/footer_two", async (req, res) => {
  try {
    const { body } = req;
    const footer = await FooterLinks.findOne({});
    if (!footer || !footer.foot2) {
      console.log("create");
      var link = await FooterLinks.create({ foot2: [body] });
      return res.sendApiResponse({ data: link });
    } else {
      console.log("push");
      var link = await FooterLinks.findOneAndUpdate(
        {},
        { $push: { foot2: body } },
        { new: true }
      );
      return res.sendApiResponse({ data: link });
    }
  } catch (error) {
    throw error;
  }
});
router.post("/footer_three", async (req, res) => {
  try {
    const { body } = req;
    const footer = await FooterLinks.findOne({});
    if (!footer || !footer.foot3) {
      console.log("create");
      var link = await FooterLinks.create({ foot3: [body] });
      return res.sendApiResponse({ data: link });
    } else {
      console.log("push");
      var link = await FooterLinks.findOneAndUpdate(
        {},
        { $push: { foot3: body } },
        { new: true }
      );
      return res.sendApiResponse({ data: link });
    }
  } catch (error) {
    throw error;
  }
});
router.post("/footer_four", async (req, res) => {
  try {
    const { body } = req;
    const footer = await FooterLinks.findOne({});
    if (!footer || !footer.foot4) {
      console.log("create");
      var link = await FooterLinks.create({ foot4: [body] });
      return res.sendApiResponse({ data: link });
    } else {
      console.log("push");
      var link = await FooterLinks.findOneAndUpdate(
        {},
        { $push: { foot4: body } },
        { new: true }
      );
      return res.sendApiResponse({ data: link });
    }
  } catch (error) {
    throw error;
  }
});

router.put("/footer_four/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const footer = await FooterLinks.findOne({
      foot4: { $elemMatch: { _id: id } },
    });
    var index = footer.foot4.findIndex((e) => e._id == id);
    footer.foot4.splice(index, 1, body);
    await footer.save();
    if (!footer || !footer.foot4) {
      return res.sendApiResponse({
        message: "Footer Link with this ID does not exist.",
      });
    }
    return res.sendApiResponse({ data: footer });
  } catch (error) {
    throw error;
  }
});
router.put("/footer_three/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const footer = await FooterLinks.findOne({
      foot3: { $elemMatch: { _id: id } },
    });
    var index = footer.foot3.findIndex((e) => e._id == id);
    footer.foot3.splice(index, 1, body);
    await footer.save();
    if (!footer || !footer.foot3) {
      return res.sendApiResponse({
        message: "Footer Link with this ID does not exist.",
      });
    }
    return res.sendApiResponse({ data: footer });
  } catch (error) {
    throw error;
  }
});
router.put("/footer_two/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const footer = await FooterLinks.findOne({
      foot2: { $elemMatch: { _id: id } },
    });
    var index = footer.foot2.findIndex((e) => e._id == id);
    footer.foot2.splice(index, 1, body);
    await footer.save();
    if (!footer || !footer.foot3) {
      return res.sendApiResponse({
        message: "Footer Link with this ID does not exist.",
      });
    }
    return res.sendApiResponse({ data: footer });
  } catch (error) {
    throw error;
  }
});
router.put("/footer_one/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const footer = await FooterLinks.findOne({
      foot1: { $elemMatch: { _id: id } },
    });
    var index = footer.foot1.findIndex((e) => e._id == id);
    footer.foot1.splice(index, 1, body);
    await footer.save();
    if (!footer || !footer.foot1) {
      return res.sendApiResponse({
        message: "Footer Link with this ID does not exist.",
      });
    }
    return res.sendApiResponse({ data: footer });
  } catch (error) {
    throw error;
  }
});

router.get("/", async (req, res) => {
  const footer = await FooterLinks.findOne({});
  console.log("footer");
  if (!footer) {
    return res.sendApiResponse({ message: "Something went wrong." });
  }
  return res.sendApiResponse({ data: footer });
});

router.get("/footer_one", async (req, res) => {
  const footer = await FooterLinks.findOne({});
  console.log("footer");
  if (!footer) {
    return res.sendApiResponse({ message: "Something went wrong." });
  }
  return res.sendApiResponse({ data: footer.foot1 });
});
router.get("/footer_two", async (req, res) => {
  const footer = await FooterLinks.findOne({});
  console.log("footer");
  if (!footer) {
    return res.sendApiResponse({ message: "Something went wrong." });
  }
  return res.sendApiResponse({ data: footer.foot2 });
});
router.get("/footer_three", async (req, res) => {
  const footer = await FooterLinks.findOne({});
  console.log("footer");
  if (!footer) {
    return res.sendApiResponse({ message: "Something went wrong." });
  }
  return res.sendApiResponse({ data: footer.foot3 });
});
router.get("/footer_four", async (req, res) => {
  const footer = await FooterLinks.findOne({});
  console.log("footer");
  if (!footer) {
    return res.sendApiResponse({ message: "Something went wrong." });
  }
  return res.sendApiResponse({ data: footer.foot4 });
});


router.get("/footer_one/:id", async (req, res) => {
  const { id } = req.params;
  const footer = await FooterLinks.findOne({});
  if (!footer) {
    return res.sendApiResponse({ message: "Footer Link not found." });
  }
  var index = footer.foot1.findIndex((e) => e._id == id);
  const foot = footer.foot1[index];
if(!foot){
  return res.sendApiResponse({message:"Footer Link not found."})
}
  return res.sendApiResponse({ data: foot });
});

router.get("/footer_two/:id", async (req, res) => {
  const { id } = req.params;
  const footer = await FooterLinks.findOne({});
  if (!footer) {
    return res.sendApiResponse({ message: "Footer Link not found." });
  }
  var index = footer.foot2.findIndex((e) => e._id == id);

  const foot = footer.foot2[index];
  if(!foot){
    return res.sendApiResponse({message:"Footer Link not found."})
  }
  return res.sendApiResponse({ data: foot });
});

router.get("/footer_three/:id", async (req, res) => {
  const { id } = req.params;
  const footer = await FooterLinks.findOne({});
  if (!footer) {
    return res.sendApiResponse({ message: "Footer Link not found." });
  }
  var index = footer.foot3.findIndex((e) => e._id == id);

  const foot = footer.foot3[index];
  if(!foot){
    return res.sendApiResponse({message:"Footer Link not found."})
  }
  return res.sendApiResponse({ data: foot });
});

router.get("/footer_four/:id", async (req, res) => {
  const { id } = req.params;
  const footer = await FooterLinks.findOne({});
  if (!footer) {
    return res.sendApiResponse({ message: "Footer Link not found." });
  }
  var index = footer.foot4.findIndex((e) => e._id == id);

  const foot = footer.foot4[index];
  if(!foot){
    return res.sendApiResponse({message:"Footer Link not found."})
  }
  return res.sendApiResponse({ data: foot });
});

router.delete("/footer_four/:id", async (req, res) => {
  const { id } = req.params;
  const footer = await FooterLinks.findOne({});
  if (!footer) {
    return res.sendApiResponse({ message: "Footer Link not found." });
  }
  var index = footer.foot4.findIndex((e) => e._id == id);
  footer.foot4.splice(index, 1);
  await footer.save();
  return res.sendApiResponse({ data: footer });
});

router.delete("/footer_two/:id", async (req, res) => {
  const { id } = req.params;
  const footer = await FooterLinks.findOne({});
  if (!footer) {
    return res.sendApiResponse({ message: "Footer Link not found." });
  }
  var index = footer.foot2.findIndex((e) => e._id == id);
  footer.foot2.splice(index, 1);
  await footer.save();
  return res.sendApiResponse({ data: footer });
});
router.delete("/footer_three/:id", async (req, res) => {
  const { id } = req.params;
  const footer = await FooterLinks.findOne({});
  if (!footer) {
    return res.sendApiResponse({ message: "Footer Link not found." });
  }
  var index = footer.foot3.findIndex((e) => e._id == id);
  footer.foot3.splice(index, 1);
  await footer.save();
  return res.sendApiResponse({ data: footer });
});
router.delete("/footer_one/:id", async (req, res) => {
  const { id } = req.params;
  const footer = await FooterLinks.findOne({});
  if (!footer) {
    return res.sendApiResponse({ message: "Footer Link not found." });
  }
  var index = footer.foot1.findIndex((e) => e._id == id);
  footer.foot1.splice(index, 1);
  await footer.save();
  return res.sendApiResponse({ data: footer });
});

module.exports = router;
