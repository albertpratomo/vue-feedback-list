import { type Feedback, FeedbackType } from '~/server/models/feedback.schema'

export default defineEventHandler(async () => {
    const feedbacks: Feedback[] = [{
        type: FeedbackType.Suggestion,
        title: 'Test title',
        body: 'Heyyyy',
        reporterName: 'Albert',
        reporterEmail: 'albert@funda.nl',
    }]

    return feedbacks
})
