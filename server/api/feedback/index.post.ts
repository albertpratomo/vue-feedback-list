import { FeedbackSchema } from '~/models/feedback'

export default defineEventHandler(async (event) => {
    const result = await readValidatedBody(event, body => FeedbackSchema.safeParse(body))

    if (!result.success) {
        throw createError({
            statusCode: 422,
            statusMessage: 'Invalid data',
            data: result.error.flatten(),
            stack: undefined,
        })
    }

    // TODO: Store feedback to mongodb.
    return result.data
})
