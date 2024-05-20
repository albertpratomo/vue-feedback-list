import { z } from 'zod'

export const FeedbackTypeEnum = z.enum(['Bug', 'Suggestion'])

export type FeedbackType = z.infer<typeof FeedbackTypeEnum>

export const FeedbackSchema = z.object({
    type: FeedbackTypeEnum,
    title: z.string(),
    body: z.string(),
    reporterName: z.string(),
    reporterEmail: z.string().email(),
})

export type Feedback = z.infer<typeof FeedbackSchema>

export type StoredFeedback = Feedback & {
    _id: string
    createdAt: string
    updatedAt: string
}
