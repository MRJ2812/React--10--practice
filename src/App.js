import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { router } from './Routes/Routes';


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
