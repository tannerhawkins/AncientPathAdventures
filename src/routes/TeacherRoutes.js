import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const ModulesHomepage = lazy(() => import("../pages/Teacher/ModulesHomepage"));
const CreateAClass = lazy(() => import("../pages/Teacher/CreateClass"));
const AddStudents = lazy(() => import("../pages/Teacher/AddStudents"));
const AddModule = lazy(() => import("../pages/Teacher/Module/AddModule"));
const CreateModuleRoutes = lazy(() => import("./CreateModuleRoutes"));

const TeacherRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/home`} component={ModulesHomepage} />
    <Route path={`${match.path}/create-class`} component={CreateAClass} />
    <Route path={`${match.path}/add-students`} component={AddStudents} />
    <Route path={`${match.path}/add-module`} component={AddModule} />
    <Route
      path={`${match.path}/create-module`}
      component={CreateModuleRoutes}
    />
    <Redirect to={`${match.path}/home`} />
  </Switch>
);

export default TeacherRoutes;
