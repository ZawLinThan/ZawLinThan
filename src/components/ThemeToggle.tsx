import { useState } from "react";

const ThemeToggle = () => {
  const [cream, setCream] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.hasAttribute("data-cream"),
  );

  const toggle = () => {
    const next = !cream;
    document.documentElement.toggleAttribute("data-cream", next);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        "content",
        getComputedStyle(document.documentElement)
          .getPropertyValue("--background")
          .trim(),
      );
    setCream(next);

    try {
      localStorage.setItem("portfolio-theme", next ? "cream" : "dark");
    } catch {
      // The toggle still works when storage is unavailable.
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Cream theme"
      aria-pressed={cream}
      onClick={toggle}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
      </svg>
      Cream
    </button>
  );
};

export default ThemeToggle;
