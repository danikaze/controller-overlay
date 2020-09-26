import { createElem } from './dom';

export function useStyle(style: string | null): void {
  if (!style) return;

  const link = createElem({
    type: 'link',
    attr: {
      rel: 'stylesheet',
      href: `styles/${style}.css`,
    },
  });
  document.head.appendChild(link);
}
