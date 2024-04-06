import React from "react";
import styled from "@emotion/styled";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const queryClient = new QueryClient();

function App() {
    return (
        <AppContainer>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </AppContainer>
    );
}

export default App;
