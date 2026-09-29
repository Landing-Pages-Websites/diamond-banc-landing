"use client";

import { useEffect, useRef, type JSX, type ReactNode } from "react";

const ENTRANCE_OFFSET = "1.5rem";
const ENTRANCE_DURATION_MS = 700;
const ENTRANCE_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
// Start the entrance slightly before the element scrolls into view so it settles on arrival.
const PRE_TRIGGER_MARGIN = "0px 0px 20% 0px";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function canAnimate(el: HTMLElement): boolean {
  if (typeof IntersectionObserver === "undefined") return false;
  if (typeof el.animate !== "function") return false;
  if (window.matchMedia?.(REDUCED_MOTION_QUERY).matches) return false;
  // Content already on screen at mount stays put — no entrance, no flicker.
  return el.getBoundingClientRect().top >= window.innerHeight;
}

function playEntrance(el: HTMLElement, delay: number): void {
  // Transform-only: content is never transparent, even mid-animation or in a full-page capture.
  el.animate(
    [{ transform: `translateY(${ENTRANCE_OFFSET})` }, { transform: "none" }],
    { duration: ENTRANCE_DURATION_MS, delay, easing: ENTRANCE_EASING, fill: "backwards" }
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canAnimate(el)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        playEntrance(el, delay);
      },
      { rootMargin: PRE_TRIGGER_MARGIN }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
