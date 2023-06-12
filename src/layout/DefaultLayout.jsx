import React from "react";

import { AppHeader } from "./header/AppHeader";
import { AppFooter } from "./footer/AppFooter";
import { AppContent } from "./AppContent";

export function DefaultLayout() {
  return (
    <div className="wrapper d-flex flex-column">
      <AppHeader />
      <div className="body">
        <AppContent />
      </div>
      <AppFooter />
    </div>
  );
}
