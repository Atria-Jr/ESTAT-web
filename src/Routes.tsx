import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Contato from "./pages/contato";
import Layout from "./Layout";


// Este arquivo aponta cada URL para um componente de página diferente.
// Para adicionar mais páginas é só seguir a mesma estrutura das que já tem
// Também será nesse arquivo que vamos configurar páginas privadas caso seja necessário em algum momento


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout envolve tudo
    children: [
      { 
        path: "/", 
        element: <Home /> 
    },
    {
        path: "/contatos", 
        element: <Contato /> 
    }
    ]
  }
]);

export default Routes;