"use client";
import Builder from "@/components/Builder";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Builder />
      </main>
    </QueryClientProvider>
  );
}

export default Home;
