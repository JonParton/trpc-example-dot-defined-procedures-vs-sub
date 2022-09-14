import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppType } from "next/dist/shared/lib/utils";
import { trpc } from "../utils/trpc";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position={"top-right"} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(MyApp);
