import createMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'

import { codeTheme } from './src/styles/code-theme.mjs'

const withNextIntl = createNextIntlPlugin()
// Plugins are named by string so the config stays serialisable for Turbopack.
const withMDX = createMDX({
  options: {
    rehypePlugins: [
      [
        'rehype-pretty-code',
        {
          theme: codeTheme,
          keepBackground: false,
          defaultLang: 'plaintext',
          bypassInlineCode: true,
        },
      ],
    ],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

export default withNextIntl(withMDX(nextConfig))
