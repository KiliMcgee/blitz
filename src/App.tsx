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
  return (
    <>
      <Nav />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/about" element={<>About</>} />
            <Route path="*" element={<>Not Found</>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App
