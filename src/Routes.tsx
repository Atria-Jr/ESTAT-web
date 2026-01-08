import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Contato from "./pages/contato";
import Layout from "./Layout";
import QuemSomos from "./pages/quem-somos";
import Servicos from "./pages/servicos";
import MachineLearning from "./pages/machine-learning";
import Planejamento from "./pages/planejamento";
import AnaliseDeDados from "./pages/analise-de-dados";
import BusinessIntelligence from "./pages/business-Intelligence";
import ValidacaoEstatistica from "./pages/validacao-estatistica";


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
        path: "/servicos/business-intelligence",
        element: <BusinessIntelligence />
      },
      {
        path: "/servicos/machine-learning",
        element: <MachineLearning />
      },
      {
        path: "servicos/planejamento-estrategico",
        element: <Planejamento />
      },
      {
        path: "servicos/validacao-estatistica",
        element: <ValidacaoEstatistica />
      }
    ]
    }
  ]);


export default Routes;