import type { ObjectId } from 'mongoose'

export enum FeedbackType {
    Bug,
    Suggestion,
}

export interface Feedback {
    _id: ObjectId
    type: FeedbackType
    title: string
    body: string
    reporterName: string
    reporterEmail: string
}
