// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
    antfu(
        {
            formatters: true,
            stylistic: {
                indent: 4,
            },
            yaml: false,
        },
    ),
)
