type MarcondesErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type MarcondesEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: MarcondesErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __marcondesEvents?: MarcondesEvents;
  }
}

export function reportMarcondesError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__marcondesEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
