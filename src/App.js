import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
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
          <Route path="/update/:id" >
            <UpdateProduct />
          </Route>
          <Route path="/">
              <ProductList />
          </Route>
          </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
