"use client";

import { ChildrenProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { ThemeProvider } from "next-themes";

export default function Wrapper({ children }: ChildrenProps) {
  const queryClient: QueryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider enableSystem attribute="class">
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              className="w-full"
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {children}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
