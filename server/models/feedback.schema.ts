export enum FeedbackType {
    Bug,
    Suggestion,
}

export interface Feedback {
    type: FeedbackType
    title: string
    body: string
    reporterName: string
    reporterEmail: string
}
