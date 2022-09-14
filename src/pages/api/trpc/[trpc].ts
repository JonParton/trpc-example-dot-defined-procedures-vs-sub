/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

const t = initTRPC.create();

const appRouter = t.router({
  foo: t.router({
    "bar.qux": t.procedure.query(() => {
      return {
        log:
          "the`foo`.`bar.qux` procedure responded (IE the one with a . in the property name)"
      };
    }),
    bar: t.router({
      qux: t.procedure.query(() => {
        return {
          log:
            "the`foo`.`bar`.`qux` procedure responded (IE the one defined as sub routers)"
        };
      })
    })
  })
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({})
});
