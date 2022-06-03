
import Dashboard from "views/Dashboard.js";
import UserPage from "views/User.js";
import crud from "views/Crud.js";
import datadis from "views/ListDiseases.js";
import dataoms from "views/DataOms.js";
import remove from "views/Delete.js";
import atualizar from "views/Update.js"
import datadoenca from "views/DataDoença.js";


var routes = [
  {
    path: "/dashboard",
    name: "Mapeamento",
    icon: "nc-icon nc-chart-bar-32",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/update",
    name: "Atualizar Dados",
    icon: "nc-icon nc-chart-bar-32",
    component: atualizar,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Cadastrar Dados",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/crud",
    name: "CRUD",
    icon: "nc-icon nc-tile-56",
    component: crud,
    layout: "/admin",
  },
  {
    path: "/data-dis",
    name: "Doenças Cadastradas",
    icon: "nc-icon nc-button-play",
    component: datadis,
    layout: "/admin",
  },
  {
    path: "/data-doenca",
    name: "Importar Dados",
    icon: "nc-icon nc-button-play",
    component: datadoenca,
    layout: "/admin",
  },
  {
    path: "/data-oms",
    name: "Importar Dados - OMs",
    icon: "nc-icon nc-bank",
    component: dataoms,
    layout: "/admin",
  },
  {
    path: "/delete",
    name: "Deletar Dados",
    icon: "nc-icon nc-bank",
    component: remove,
    layout: "/admin",
  },

];
export default routes;