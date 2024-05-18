export enum FeedbackType {
    Bug,
    Suggestion,
}

export interface Feedback {
    _id: number
    type: FeedbackType
    title: string
    body: string
    reporterName: string
    reporterEmail: string
}
