import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/NavBar/NavBar";
import Stickers from './Pages/Stickers';
import Detalles from './Pages/Detalles';
import Categorias from './Pages/Categorias';
import Carrito from './Pages/Carrito';
import { CartContextProvider } from './Contexts/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <Switch>

          <Route exact path="/detalles/:id">
            <Detalles/>
          </Route>

          <Route exact path="/categoria/:ctg">
            <Categorias/>
          </Route>

          <Route exact path="/carrito">
            <Carrito/>
          </Route>

          <Route exact path="/">
            <Stickers/>
          </Route>

        </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );

};

export default App;