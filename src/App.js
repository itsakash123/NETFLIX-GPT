import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const App=()=>{
    return (
      <Provider store={appStore}>
        <Body />
      </Provider>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);