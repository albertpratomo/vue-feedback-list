import { type Feedback, FeedbackType } from '~/server/models/feedback.schema'

export default defineEventHandler(async () => {
    const feedbacks: Feedback[] = [{
        _id: 1,
        type: FeedbackType.Suggestion,
        title: 'Test title',
        body: 'Heyyyy',
        reporterName: 'Albert',
        reporterEmail: 'albert@funda.nl',
    }, {
        _id: 2,
        type: FeedbackType.Bug,
        title: 'Test bug',
        body: 'Heyyyy',
        reporterName: 'Albert',
        reporterEmail: 'albert@funda.nl',
    }]

    return feedbacks
})
