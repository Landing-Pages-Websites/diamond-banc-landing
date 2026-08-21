import type { JSX, SVGProps } from "react";

// Single icon family , lucide-style stroked SVGs (24×24, currentColor).
// Never emoji. Keys map to the `icon` strings used in content.ts.

type IconPaths = JSX.Element;

const PATHS: Record<string, IconPaths> = {
  gem: (
    <>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M11 3 8 9l4 12 4-12-3-6" />
      <path d="M2 9h20" />
    </>
  ),
  watch: (
    <>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 9.5V12l1.6 1" />
      <path d="M9 3.8 9.5 2h5L15 3.8M9 20.2l.5 1.8h5l.5-1.8" />
    </>
  ),
  bar: (
    <>
      <path d="M3.2 10h17.6l-1.5 8H4.7z" />
      <path d="M6 10 7.4 6h9.2L18 10" />
    </>
  ),
  tag: (
    <>
      <path d="M20.5 13.5 13 21a2 2 0 0 1-2.83 0l-6.67-6.67A2 2 0 0 1 3 12.9V5a2 2 0 0 1 2-2h7.9a2 2 0 0 1 1.42.59l6.18 6.18a2 2 0 0 1 0 2.73Z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </>
  ),
  vault: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="11.5" cy="12" r="3.6" />
      <path d="M11.5 12h3.7" />
    </>
  ),
  camera: (
    <>
      <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ),
  ship: (
    <>
      <path d="M2 6h11v9H2Z" />
      <path d="M13 9h4l3 3v3h-7Z" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </>
  ),
  dollar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.6 9c-.5-1-1.5-1.5-2.6-1.5-1.5 0-2.6.8-2.6 2s1 1.7 2.6 2 2.6.9 2.6 2.2-1.1 2-2.6 2-2-.5-2.6-1.5" />
      <path d="M12 6v1.6M12 16.4V18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5 3.5 8.4 8 10 4.5-1.6 8-5 8-10V5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  star: (
    <path d="M12 2.5l2.9 6.05 6.6.9-4.8 4.55 1.2 6.6L12 18.4l-5.9 2.7 1.2-6.6L2.5 9.45l6.6-.9z" />
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.4 8 22l4-2.4L16 22l-1-7.6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  ),
  arrow: <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />,
  check: <path d="m4.5 12.75 6 6 9-13.5" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 4.5v15m7.5-7.5h-15" />,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof PATHS | string;
}

export function Icon({ name, className, ...rest }: IconProps): JSX.Element | null {
  const path = PATHS[name];
  if (!path) return null;
  // The svg carries a default `h-5 w-5` only when a caller omits sizing, so any
  // supplied w-/h- utility wins outright. A concatenated `h-5 w-5 ${className}`
  // would not: Tailwind emits `.h-5` after `.h-4`, so at equal specificity the
  // default would override smaller caller sizes (h-4, h-3.5).
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "h-5 w-5"}
      {...rest}
    >
      {path}
    </svg>
  );
}
