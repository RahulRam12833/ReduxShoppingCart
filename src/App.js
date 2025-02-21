import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import Cart from './components/Cart';

function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
