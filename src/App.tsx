import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/nav";
import Splash from "./components/splash/splash";

// TODO - Implement lazy routing
// const Home = lazy(() => import("./components/Home"));
// const About = lazy(() => import("./components/About"));
// const NotFound = lazy(() => import("./components/NotFound"));

// TODO -- Enforce strict linting during build: { ..., "build": "tsc -b && vite build", ... }

const App = () => {
  const ROOT = "/blitz";

  return (
    <>
      <Nav />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROOT} element={<Splash />} />
            <Route path={ROOT + "/about"} element={<>About</>} />
            <Route path={ROOT + "*"} element={<>Not Found</>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App
