import React from "react";

import { AppHeader } from "./header/AppHeader";
import { AppFooter } from "./footer/AppFooter";
import { AppContent } from "./AppContent";

export function DefaultLayout() {
  return (
    <div className="wrapper d-flex flex-column">
      <AppHeader />
      <div className="body flex-grow-1 px-3">
        <AppContent />
      </div>
      <AppFooter />
    </div>
  );
}
