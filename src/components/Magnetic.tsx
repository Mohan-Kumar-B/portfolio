import { cloneElement, useRef, type ReactElement, type MouseEvent } from "react";

/**
 * Wraps a single interactive child and pulls it toward the pointer.
 * Purely presentational — no layout or behaviour changes.
 */
export function Magnetic({
  children,
  strength = 0.35,
}: {
  children: ReactElement<{
    ref?: React.Ref<HTMLElement>;
    onMouseMove?: (e: MouseEvent<HTMLElement>) => void;
    onMouseLeave?: () => void;
  }>;
  strength?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
    el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return cloneElement(children, {
    ref: (node: HTMLElement | null) => {
      ref.current = node;
    },
    onMouseMove,
    onMouseLeave,
  });
}
