import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./layouts/RootLayout/RootLayout";

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
