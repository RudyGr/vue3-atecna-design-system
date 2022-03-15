import '@divriots/dockit-core/style.css';
import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import logoSvg from './logo.svg?raw';
import '~/theme/src/theme.scss';

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} .preview-story .story_padded {
      background-color: var(--doc-color-background);
    }
    .box {
      width: 4rem;
      height: 4rem;
      background-color: var(--color-white);
      box-shadow: var(--shadow-large);
      border-radius: var(--border-radius-medium);
    }
  </style>
  <dockit-layout
    .context="${context}"
    @color-scheme-change="${(event) => {
      if (event.detail.colorScheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('color-scheme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('color-scheme', 'light');
      }
    }}"
  >
    <div class="logo" slot="logo" aria-label="starter-vue3">
      ${unsafeHTML(logoSvg)}
    </div>
    <div class="prose dark:prose-invert">${unsafeHTML(content)}</div>
  </dockit-layout>
`;
