import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';

import Header from './Header';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
      </BrowserRouter> 
    </div>
  );
}

export default App;
