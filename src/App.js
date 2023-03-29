import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { DefaultLayout } from "./layout/DefaultLayout";

const loading = <Spinner />;

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
