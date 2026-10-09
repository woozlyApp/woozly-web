"use client";

import { useRef, useState } from "react";

interface DraggableNoteProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Base rotation (deg) kept while dragging, e.g. -5 */
  rotate?: number;
  /** Show a pushpin at the top-center (like the app's sticky wall). Default true. */
  pin?: boolean;
}

/**
 * A sticky note you can drag around the wall. Pointer-based (works on touch),
 * composes the drag translate with a fixed base rotation. Lifts + straightens
 * slightly while grabbed for a tactile feel.
 */
export function DraggableNote({ children, className, style, rotate = 0, pin = true }: DraggableNoteProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef({ x: 0, y: 0, px: 0, py: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    e.stopPropagation(); // so a note on top of a draggable card doesn't drag both
    setDragging(true);
    start.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setPos({
      x: start.current.px + (e.clientX - start.current.x),
      y: start.current.py + (e.clientY - start.current.y),
    });
  };
  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const r = dragging ? rotate * 0.4 : rotate;

  return (
    <div
      className={className}
      style={{
        ...style,
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${r}deg) scale(${dragging ? 1.05 : 1})`,
        cursor: dragging ? "grabbing" : "grab",
        touchAction: "none",
        zIndex: dragging ? 50 : (style?.zIndex as number) ?? undefined,
        transition: dragging ? "none" : "transform 0.18s ease",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {pin && (
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 12,
            height: 12,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle at 35% 28%, #ff9a9a, #e23b3b 58%, #a51f1f)",
            boxShadow: "0 1.5px 3px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.25)",
          }}
        />
      )}
      {children}
    </div>
  );
}
