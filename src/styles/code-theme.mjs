/**
 * Syntax highlighting theme for code blocks in articles. Every colour is
 * a CSS variable from tailwind.css, so code follows the morning and
 * evening editions like the rest of the paper.
 */
export const codeTheme = {
  name: 'the-paper',
  type: 'light',
  colors: {
    'editor.foreground': 'var(--ink)',
    'editor.background': 'var(--paper-raised)',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: 'var(--code-comment)', fontStyle: 'italic' },
    },
    {
      scope: ['keyword', 'storage'],
      settings: { foreground: 'var(--code-keyword)' },
    },
    {
      scope: ['keyword.operator', 'punctuation'],
      settings: { foreground: 'var(--ink)' },
    },
    {
      scope: ['string.quoted', 'punctuation.definition.string'],
      settings: { foreground: 'var(--code-string)' },
    },
    {
      scope: [
        'entity.name.function',
        'entity.name.command',
        'support.function',
      ],
      settings: { foreground: 'var(--code-function)' },
    },
    {
      scope: [
        'constant.numeric',
        'constant.language',
        'constant.character.escape',
        'variable',
        'punctuation.definition.variable',
      ],
      settings: { foreground: 'var(--code-constant)' },
    },
  ],
}
