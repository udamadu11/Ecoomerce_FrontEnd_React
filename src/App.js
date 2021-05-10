import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';

import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProduct';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/home">
            <ProductList />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
        <Route path="/addProducts" >
          <AddProducts />
        </Route>
      </BrowserRouter> 
    </div>
  );
}

export default App;
