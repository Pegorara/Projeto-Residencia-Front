import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import '@coreui/coreui/dist/css/coreui.min.css'

import '../src/css/global.css'

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>sldka</div>}>
        <Routes>
          <Route path="*" name="home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
