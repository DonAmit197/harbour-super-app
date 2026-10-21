// Must be the first focusable element on every page.
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only rounded-pill bg-navy px-6 py-3 text-button text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
    >
      Skip to main content
    </a>
  )
}
