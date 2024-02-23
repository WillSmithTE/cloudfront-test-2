import { onRequest as ____path___js_onRequest } from "/Users/willy/projects/cloudflare-test-2/functions/[[path]].js"

export const routes = [
    {
      routePath: "/:path*",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [____path___js_onRequest],
    },
  ]