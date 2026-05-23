import React from "react";
import ReactDOM from "react-dom/client"

import Home from "./pages/Home"
import ListaServicos from "./pages/ListaServicos"
import ListaDevs from "./pages/ListaDevs"
import PerfilIUsuario from "./pages/PerfilUsuario"
import VizualizarServicos from "./pages/VizualizarServicos"
import CadastroUsuario from "./pages/CadastroUsuario"
import CadastroServicos from "./pages/CadastroServicos"
import Login from "./pages/Login"

import Header from "./components/Header"

import "./index.css"

import { BrowserRouter,Routes, Route} from "react-router-dom"
import PerfilUsuario from "./pages/PerfilUsuario";

ReactDOM.createRoot(document.getElementById("root")).render(
       
  <React.StrictMode>

    <BrowserRouter>

    <Header/>

     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/lista/Servicos" element={<ListaServicos/>}/>
      <Route path="/lista/Devs" element={<ListaDevs />}/>
      <Route path="/perfil/:idUsuario" element={<PerfilUsuario/>}/>
      <Route path="/servico/:idServico" element={<VizualizarServicos/>}/>
      <Route path="/cadastrar/Servico" element={<CadastroServicos />}/>
      <Route path="/cadastrar/Usuario" element={<CadastroUsuario />}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>

    </BrowserRouter>

  </React.StrictMode>

)
