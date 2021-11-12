import React from "react";
import { Route, Switch } from "react-router";
import LoginForm from "./Login";

function UnauthenticatedApp({ setCurrentUser }) {
    return (
        <>
            <div>Not signed in!</div>
            <Switch>
                <Route exact path="/">
                    <LoginForm setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </>
    )
}

export default UnauthenticatedApp;