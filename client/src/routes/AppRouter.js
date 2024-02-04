import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Login from "../pages/IniciarSesion/login";

import BienvenidaAdmi from "../pages/Bienvenida/Administrador";
import BienvenidaVendedor from "../pages/Bienvenida/Vendedor";
import BienvenidaTrabajador from "../pages/Bienvenida/Trabajador";

import ListarListaTrabajo from "../pages/ListaTrabajo/listarListaTrabajo";
import CrearListaTrabajo from "../pages/ListaTrabajo/crearListaTrabajo";
import ActualizarListaTrabajo from "../pages/ListaTrabajo/actualizarListaTrabajo";

import ListarPedido from "../pages/Pedidos/listarPedido";
import CrearPedido from "../pages/Pedidos/crearPedido";
import ActualizarPedido from "../pages/Pedidos/actualizarPedido";

import ListarProducto from "../pages/Productos/listarProducto";
import CrearProducto from "../pages/Productos/crearProducto";
import ActualizarProducto from "../pages/Productos/actualizarProducto";

import ListarTrabajador from "../pages/Trabajadores/listarTrabajador";
import CrearTrabajador from "../pages/Trabajadores/crearTrabajador";
import ActualizarTrabajador from "../pages/Trabajadores/actualizarTrabajardor";

import Unauthorized from "../components/PrivateRoute/Unauthorized";
import ProtectedRoute from "../components/PrivateRoute/protectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Pantallas de Bienvenida */}
        <Route path="/Administracion" element={<ProtectedRoute element={<BienvenidaAdmi />} role={1} />}/>
        <Route path="/Artesano" element={<ProtectedRoute element={<BienvenidaTrabajador />} role={2} />}/>
        <Route path="/Vendedor" element={<ProtectedRoute element={<BienvenidaVendedor />} role={3} />}/>

        {/* Pantallas de Productos */}
        <Route path="/productos" element={<ListarProducto />} />
        <Route path="/crear/producto" element={<CrearProducto />} />
        <Route path="/editar/producto/:idProduct" element={<ActualizarProducto />} />

        {/* Pantallas de Trabajadores */}
        <Route path="/trabajadores" element={<ListarTrabajador />} />
        <Route path="/crear/trabajador" element={<CrearTrabajador />} />
        <Route path="/editar/trabajador/:idCardWorker" element={<ActualizarTrabajador />} />

        {/* Pantallas de Pedidos */}
        <Route path="/pedidos" element={<ListarPedido />} />
        <Route path="/crear/pedidos" element={<CrearPedido />} />
        <Route path="/editar/pedidos" element={<ActualizarPedido />} />

        {/* Pantallas de Lista Trabajdos */}
        <Route path="/listaTrabajo" element={<ListarListaTrabajo />} />
        <Route path="/crear/listaTrabajo" element={<CrearListaTrabajo />} />
        <Route path="/editar/listaTrabajo"element={<ActualizarListaTrabajo />} />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
