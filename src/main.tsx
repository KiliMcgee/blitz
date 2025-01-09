import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Splash from "./components/splash/splash";

// TODO - Implement lazy routing
// const Home = lazy(() => import("./components/Home"));
// const About = lazy(() => import("./components/About"));
// const NotFound = lazy(() => import("./components/NotFound"));

// TODO -- Enforce strict linting during build: { ..., "build": "tsc -b && vite build", ... }

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<Splash />} />
          <Route path={"/about"} element={<>About</>} />
          <Route path={"*"} element={<>Not Found</>} />
        </Routes>
      </Suspense>
    </HashRouter>
  </StrictMode>
);
