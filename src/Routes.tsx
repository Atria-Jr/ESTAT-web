import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Contato from "./pages/contato";
import Layout from "./Layout";
import QuemSomos from "./pages/quem-somos";
import Servicos from "./pages/servicos";
import MachineLearning from "./pages/machine-learning";
import AnaliseDeDados from "./pages/analise-de-dados";


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
      },
      {
        path: "/quem-somos",
        element: <QuemSomos />
      },
      {
        path: "/servicos",
        element: <Servicos />
      },
      {
        path: "/servicos/analise-de-dados",
        element: <AnaliseDeDados />
      },
      {
        path: "/servicos/machine-learning",
        element: <MachineLearning />
      }
    ]
    }
  ]);


export default Routes;