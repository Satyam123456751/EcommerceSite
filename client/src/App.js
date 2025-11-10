import React, { Fragment, useReducer } from "react";

import { Home, LayoutContext, layoutState, layoutReducer } from "./components/shop";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
                            <Home />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
