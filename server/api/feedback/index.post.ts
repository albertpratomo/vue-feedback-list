import { FeedbackSchema } from '~/models/feedback'

export default defineEventHandler(async (event) => {
    const validation = await readValidatedBody(event, body => FeedbackSchema.safeParse(body))

    if (!validation.success) {
        throw createError({
            statusCode: 422,
            statusMessage: 'Invalid data',
            data: validation.error.flatten(),
            stack: undefined,
        })
    }

    return FeedbackModel.create(validation.data)
})
