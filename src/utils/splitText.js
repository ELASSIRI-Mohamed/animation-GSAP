/**
 * Free replacement for GSAP's premium SplitText plugin.
 * Splits text into chars, words, or lines for animation.
 */

function splitIntoChars(el) {
  const text = el.textContent;
  el.textContent = '';
  const chars = [];
  for (const char of text) {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.textContent = char;
    if (char === ' ') span.style.whiteSpace = 'pre';
    el.appendChild(span);
    chars.push(span);
  }
  return chars;
}

function splitIntoWords(el) {
  const text = el.textContent;
  const words = text.trim().split(/\s+/).filter(Boolean);
  el.textContent = '';
  const wordSpans = [];
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.textContent = word;
    el.appendChild(span);
    wordSpans.push(span);
    if (i < words.length - 1) {
      el.appendChild(document.createTextNode(' '));
    }
  });
  return wordSpans;
}

function splitIntoLines(el) {
  const html = el.innerHTML;
  const parts = html.split(/<br\s*\/?>/i);
  el.innerHTML = '';
  const lineSpans = [];
  parts.forEach((part, i) => {
    const span = document.createElement('span');
    span.style.display = 'block';
    span.innerHTML = part;
    el.appendChild(span);
    lineSpans.push(span);
  });
  return lineSpans;
}

/**
 * Split text in elements matching selector.
 * @param {string} selector - CSS selector (e.g. '.title', '#about h2')
 * @param {{ type?: string }} options - type: 'chars', 'words', 'lines', or 'chars, words'
 * @returns {{ chars: HTMLElement[], words: HTMLElement[], lines: HTMLElement[] }}
 */
export function splitText(selector, options = {}) {
  const type = (options.type || 'chars').toLowerCase();
  const elements = document.querySelectorAll(selector);
  const result = { chars: [], words: [], lines: [] };

  elements.forEach((el) => {
    if (type.includes('chars')) {
      result.chars.push(...splitIntoChars(el));
    } else if (type.includes('words')) {
      result.words.push(...splitIntoWords(el));
    } else if (type.includes('lines')) {
      result.lines.push(...splitIntoLines(el));
    }
  });

  return result;
}

/** Same as splitText, for API compatibility with SplitText.create() */
export function create(selector, options = {}) {
  return splitText(selector, options);
}
