import express from "express"
import { sendTheEmail } from "../controller/mail.controller.js"

const router = express.Router()

router.post("/sendmail", sendTheEmail)

export default router