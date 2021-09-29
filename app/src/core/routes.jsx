import React from "react";
import { Switch, Route } from "react-router";
import ROUTES from "Constants/routes";
import loadable from "@loadable/component";

// Load bundles asynchronously so that the initial render happens faster
const Welcome = loadable(() =>
  import(/* webpackChunkName: "WelcomeChunk" */ "Pages/welcome/welcome")
);
const About = loadable(() =>
  import(/* webpackChunkName: "AboutChunk" */ "Pages/about/about")
);
const Motd = loadable(() =>
  import(/* webpackChunkName: "MotdChunk" */ "Pages/motd/motd")
);
const Localization = loadable(() =>
  import(
    /* webpackChunkName: "LocalizationChunk" */ "Pages/localization/localization"
  )
);
const UndoRedo = loadable(() =>
  import(/* webpackChunkName: "UndoRedoChunk" */ "Pages/undoredo/undoredo")
);
const ContextMenu = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/contextmenu/contextmenu")
);
const Login = loadable(() =>
  import("Pages/account/Login")
);
const Logout = loadable(() =>
  import("Pages/account/Logout")
);
const FotgotPassword = loadable(() =>
  import("Pages/account/FotgotPassword")
);
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}></Route>
        <Route path={ROUTES.LOGOUT} component={Logout}></Route>
        <Route path={ROUTES.FORGOTPASSWORD} component={FotgotPassword}></Route>
        <Route exact path={ROUTES.WELCOME} component={Welcome}></Route>
        <Route path={ROUTES.ABOUT} component={About}></Route>
        <Route path={ROUTES.MOTD} component={Motd}></Route>
        <Route path={ROUTES.LOCALIZATION} component={Localization}></Route>
        <Route path={ROUTES.UNDOREDO} component={UndoRedo}></Route>
        <Route path={ROUTES.CONTEXTMENU} component={ContextMenu}></Route>
      </Switch>
    );
  }
}

export default Routes;
