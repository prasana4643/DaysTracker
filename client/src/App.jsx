import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing";
import HomeLayout from "./Components/HomeLayout";
import Home, { loader as tasksLoader } from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTaskContainer from "./Components/AddTaskContainer";
import TasksLayout from "./Components/TasksLayout";
import { action as RegisterAction } from "./Pages/Register";
import { action as LoginAction } from "./Pages/Login";
import TaskDetails from "./Components/TaskDetails";
import { loader as taskDetailsLoader } from "./Components/TaskDetails";
import { loader as tasksLayoutLoader } from "./Components/TasksLayout";
import ResetPassword from "./Pages/ResetPassword";
import "./css/App.css";
import UpdatePassword from "./Pages/UpdatePassword";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: RegisterAction,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "home",
        element: <TasksLayout />,
        loader: tasksLayoutLoader,
        children: [
          {
            index: true,
            element: <Home />,
            loader: tasksLoader,
          },
          {
            path: "addTask",
            element: <AddTaskContainer />,
          },
          {
            path: "taskDetails/:id",
            element: <TaskDetails />,
            loader: taskDetailsLoader,
          },
          {
            path: "updatePassword",
            element: <UpdatePassword />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
