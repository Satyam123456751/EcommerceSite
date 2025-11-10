import React, { Fragment, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Home, LayoutContext, layoutState, layoutReducer } from "./components/shop";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    <Fragment>
          <Router>
      <LayoutContext.Provider value={{ data, dispatch }}>
                            <Home />
      </LayoutContext.Provider>
      </Router>
    </Fragment>
  );
}

export default App;
