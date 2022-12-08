// built-in modules
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// third-party modules
import axios from "axios";

// custom modules
import routes from "./routes";

// components
import Container from "./components/common/container";
import NavBar from "./components/ui/NavBar";
import ErrorAlert from "./components/ui/errorAlert";

const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    return <Route path={prop.path} component={prop.component} key={key} />;
  });
};

function App() {
  const [apiAvailable, setApiAvailable] = useState();

  useEffect(async () => {
    const { data } = await axios.get("quality");

    data && setApiAvailable(true);
  }, []);

  return (
    <div className="App">
      <NavBar routes={routes} />
      <Container>
        <Switch>
          {getRoutes(routes)}
          <Redirect to="/" />
        </Switch>
        {!apiAvailable && <ErrorAlert />}
      </Container>
    </div>
  );
}

export default App;
