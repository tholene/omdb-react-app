import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContainer } from "./feature/common/component/AppContainer";


const queryClient = new QueryClient();

function App() {
  return (
    <AppContainer>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppContainer>
  );
}

export default App;
