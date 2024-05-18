import { FeedbackModel } from '~/server/models/Feedback.schema'

export default defineEventHandler(async () => {
    return await FeedbackModel.find()
})
