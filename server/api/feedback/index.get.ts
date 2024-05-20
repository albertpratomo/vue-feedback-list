export default defineEventHandler(async () => {
    return await FeedbackModel.find()
})
