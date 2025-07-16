import express from "express"
import { protectRoute } from "../middleware/auth.js"
import { getAiSuggest } from "../controllers/aiSuggestController.js"

const aiSuggestRouter = express.Router()

aiSuggestRouter.post('/getSuggest', getAiSuggest)

export default aiSuggestRouter
