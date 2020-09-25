const Contacto = require("../models/Contacto");

const contactoCtrl = {};

contactoCtrl.getContacto = async (req, res, next) => {
  const contacto = await Contacto.find();
  res.json(contacto);
};

contactoCtrl.createContacto = async (req, res, next) => {
  const contacto = new Contacto({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });
  await contacto.save();
  res.json({ status: "Contacto created" });
};

contactoCtrl.getContacto = async (req, res, next) => {
  const { id } = req.params;
  const contacto = await Contacto.findById(id);
  res.json(contacto);
};

contactoCtrl.editContacto = async (req, res, next) => {
  const { id } = req.params;
  await Contacto.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Contacto Updated" });
};

contactoCtrl.deleteContacto = async (req, res, next) => {
  await Contacto.findByIdAndRemove(req.params.id);
  res.json({ status: "Contacto Deleted" });
};

module.exports = contactoCtrl;
