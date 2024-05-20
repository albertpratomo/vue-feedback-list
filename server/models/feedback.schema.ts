import { zodSchema } from '@zodyac/zod-mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'
import { type Feedback, FeedbackSchema } from '~/models/feedback'

const schema = zodSchema(FeedbackSchema)

export const FeedbackModel = defineMongooseModel<Feedback>({
    name: 'Feedback',
    schema: schema.obj,
    options: {
        timestamps: true,
    },
})
