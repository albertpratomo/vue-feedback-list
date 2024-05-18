import { defineMongooseModel } from '#nuxt/mongoose'
import { FeedbackType } from '~/utils/types'

export const FeedbackModel = defineMongooseModel<Feedback>({
    name: 'Feedback',
    schema: {
        type: {
            type: Number,
            enum: FeedbackType,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        reporterName: {
            type: String,
            required: true,
        },
        reporterEmail: {
            type: String,
            required: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill a valid email address'],
        },
    },
    options: {
        timestamps: true,
    },
})
