import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import SingleFood from "./components/SingleFood/SingleFood";
import Foods from "./components/Foods/Foods";
import About from "./components/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken"
            );
          },
          element: <Home></Home>,
        },
        {
          path: "/food",
          element: <Foods></Foods>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/food/:foodId",
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`
            );
          },
          element: <SingleFood></SingleFood>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
