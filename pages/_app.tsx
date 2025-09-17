import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Site = ({ Component, pageProps }: AppProps) => (
  <>
    <Global
      styles={{
        body: {
          margin: 0,
          display: "flex",
          maxWidth: "100vw",
          overflowX: "hidden",
        },
      }}
    />
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </>
);

export default Site;
