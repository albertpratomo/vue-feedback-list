export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    // ?sort=asc shall return feedbacks in ascending order.
    const order = query.sort === 'asc' ? 1 : -1

    return await FeedbackModel.find().sort({ createdAt: order })
})
