# Vue Feedback List

<img width="1714" alt="image" src="https://github.com/albertpratomo/vue-feedback-list/assets/25815584/d64d4222-9068-4309-af3d-59fa69f9bfd0">

This is an app where you can view and submit feedbacks. You can play with it [here](https://vue-feedback-list.vercel.app/).

The tech stack: Vue 3, Nuxt 3, Tailwind, TS, MongoDB, Mongoose, Zod, VeeValidate, Vitest, Testing Library.

## Setup

1. `git clone` this repo
1. Install `pnpm` on your machine
1. Create and fill in `.env` file
1. `pnpm i`
1. `pnpm dev`
1. App should be live in `localhost:3000`
1. `pnpm test` to run the automated tests

## Notes

1. I don't want to reinvent the wheel, thus I use design system components from [Shadcn Vue](https://www.shadcn-vue.com). This allows me to get accessible and keyboard-navigable components quickly.
1. I implement FE form validation, so user get instant feedback while typing. I also implement BE form validation, so the stored data is ensured to be clean. Thanks to [Zod](https://zod.dev/), the same schema can be reused to validate in FE and BE. The Zod schema is also used to generate Mongoose schema and the TS interface. See this [commit](https://github.com/albertpratomo/vue-feedback-list/commit/c9fe99ae3c44be69ae626025ce6f7f6f0f57e26b).
1. I added a Vitest component test to ensure that the page is functioning properly. See this [test file](https://github.com/albertpratomo/vue-feedback-list/blob/main/pages/index.test.ts).
1. I implemented [Tiptap](https://tiptap.dev/) to add Markdown support for the feedback body, so users can describe their feedback better. See this [commit](https://github.com/albertpratomo/vue-feedback-list/commit/2d84d1b7ed81b2f136ef54001f46e5b54e7cf0c4).
1. I made it tablet and desktop responsive.

## Improvement list
1. Use vue-i18n instead of hardcoding texts.
1. Make the app mobile responsive.
1. Add features: filter, sort, pagination.
