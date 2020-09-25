import { Router } from 'express'
const router = Router();

const contacto = require("../controllers/contacto.controller");

router.get("/", contacto.getContacto);

router.post("/", contacto.createContacto);

router.get("/:id", contacto.getContacto);

router.put("/:id", contacto.editContacto);

router.delete("/:id", contacto.deleteContacto);

export default router;
