import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BienvenidaAdmi from "./pages/Bienvenida/Administrador";
import BienvenidaVendedor from "./pages/Bienvenida/Vendedor"
import BienvenidaTrabajador from "./pages/Bienvenida/Trabajador";
import ListarListaTrabajo from "./pages/ListaTrabajo/listarListaTrabajo";
import Login from "./pages/login";
import ListarPedido from "./pages/Pedidos/listarPedido";
import ListarProducto from "./pages/Productos/listarProducto";
import ListarTrabajador from "./pages/Trabajadores/listarTrabajador";

const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />

                {/* Pantallas de Bienvenida */}
                <Route path="/Administracion" element={<BienvenidaAdmi/>} />
                <Route path="/Artesano" element={<BienvenidaTrabajador/>} />
                <Route path="/Vendedor" element={<BienvenidaVendedor/>} />

                {/* Pantallas de Productos */}
                <Route path="/productos" element={<ListarProducto/>} />

                {/* Pantallas de Trabajadores */}
                <Route path="/trabajadores" element={<ListarTrabajador/>} />

                {/* Pantallas de Pedidos */}
                <Route path="/pedidos" element={<ListarPedido/>} />

                {/* Pantallas de Lista Trabajdos */}
                <Route path="/listaTrabajo" element={<ListarListaTrabajo/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter