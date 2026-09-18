"use client";

import { useState, type ReactNode } from "react";

export function Expandable({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="my-6 border border-[var(--border-subtle)] rounded-lg overflow-hidden bg-[var(--bg-surface)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[var(--bg-elevated)] transition-colors"
      >
        <span
          className={`font-mono text-sm text-[var(--accent-amber)] transition-transform ${
            open ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
        <span className="text-sm font-medium text-[var(--text-primary)]">
          {title}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 text-[var(--text-secondary)] text-sm border-t border-[var(--border-subtle)]">
          {children}
        </div>
      )}
    </div>
  );
}
