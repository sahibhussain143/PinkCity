import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoadingPage from "./Components/Layout/LoadingPage.jsx";
const App = React.lazy(() => import("./App.jsx"));

const criticalCSS = `
  #root { display: block; }
  .lcp-element { opacity: 1 !important; }
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
  </StrictMode>
);
