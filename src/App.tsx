import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Loader from "./components/Loader";
import TopScroller from "./components/TopScroll";

const App: React.FC = () => {
  return (
    <Router>
      <TopScroller />
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(({ path, element, children }, idx) => (
            <Route key={idx} path={path} element={element}>
              {children?.map((child, childIdx) => (
                <Route
                  key={childIdx}
                  path={child.path}
                  element={child.element}
                  index={child.index}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
