/* Mock IntersectionObserver for jsdom */
class MockIntersectionObserver {
  constructor(cb) { this.cb = cb; }
  observe(el) { this.cb([{ isIntersecting: true, target: el }]); }
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = MockIntersectionObserver;

import '@testing-library/jest-dom';
