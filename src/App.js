import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Booking from './component/Booking/Booking';
import About from './component/About/About';
import ProposedPlaces from './component/ProposedPlaces/ProposedPlaces';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/booking',
          element:<Booking></Booking>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/proposedPlaces',
          element:<ProposedPlaces></ProposedPlaces>
        },
      ]

    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
