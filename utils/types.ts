export enum FeedbackType {
    Bug,
    Suggestion,
}

export interface Feedback {
    _id: string
    type: FeedbackType
    title: string
    body: string
    reporterName: string
    reporterEmail: string
    createdAt: string
    updatedAt: string
}
