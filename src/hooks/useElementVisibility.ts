"use client";

import { useEffect, useState } from "react";

// Tracks whether the element matching `selector` is in the viewport, using
// IntersectionObserver (never scroll polling). Defaults to `true` so UI that
// hides while the target is on screen doesn't flash in before the first
// observation. Returns to a stable value once the observer reports.
export function useElementVisibility(selector: string): boolean {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = document.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [selector]);

  return visible;
}
