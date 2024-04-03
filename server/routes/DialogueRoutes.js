const express = require("express")
const router = express.Router()
const DialogueController = require("../controller/DialogueController")
const verifyJWT = require("../middleware/verifyJWT")

router.use(verifyJWT)

router.post("/", DialogueController.createNewDialogue)
router.put("/:id", DialogueController.upDateDialogue)

router.get("/id/:id", DialogueController.getDialogueByUserId)
router.get("/:role", DialogueController.getAllDialogues)
router.put("/read/:id", DialogueController.upDateDialogueRead)

module.exports = router