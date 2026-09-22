import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: () => (
      <div className="max-w-lg">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">404</p>
        <h1 className="mt-3 font-display text-3xl text-fg">This page is not in the archive.</h1>
        <p className="mt-3 text-sm text-muted">T00–T35 live under Archive. The hub is on GitHub.</p>
      </div>
    ),
  });
}
