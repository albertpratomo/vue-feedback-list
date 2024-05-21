import { describe, expect, it } from 'vitest'
import { registerEndpoint, renderSuspended } from '@nuxt/test-utils/runtime'
import { fireEvent } from '@testing-library/vue'
import index from './index.vue'

function createFeedback(id: number): StoredFeedback {
    return {
        _id: `${id}`,
        title: `Title ${id}`,
        body: `Body ${id}`,
        type: id % 2 === 0 ? 'Bug' as const : 'Suggestion' as const,
        reporterEmail: `user${id}@gmail.com`,
        reporterName: `User ${id}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
}

async function render() {
    registerEndpoint('/api/feedback', () => [
        createFeedback(1),
        createFeedback(2),
    ])

    return await renderSuspended(index)
}

describe('index', () => {
    it('fetches and renders feedbacks', async () => {
        const { getByRole } = await render()

        const list = getByRole('list', { name: 'Feedback list' })

        expect(list.childElementCount).toBe(2)

        for (let i = 0; i < 2; i++) {
            const id = i + 1

            expect(list.children[i].textContent).toBe(`Title ${id}User ${id} just now`)
        }
    })

    it('shows the clicked feedback', async () => {
        const { getByRole } = await render()

        const feedbackViewer = getByRole('main', { name: 'Feedback viewer' })

        expect(feedbackViewer.textContent)
            .toMatchInlineSnapshot(`"just nowTitle 1User 1 (user1@gmail.com) Body 1"`)

        await fireEvent.click(getByRole('listitem', { name: 'Title 2' }))

        expect(feedbackViewer.textContent)
            .toMatchInlineSnapshot(`"just nowTitle 2User 2 (user2@gmail.com) Body 2"`)
    })
})
