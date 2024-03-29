import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Login from "../pages/IniciarSesion/login";

import BienvenidaAdmi from "../pages/Bienvenida/Administrador";
import BienvenidaVendedor from "../pages/Bienvenida/Vendedor";
import BienvenidaTrabajador from "../pages/Bienvenida/Trabajador";

import ListarListaTrabajoAdministrador from "../pages/ListaTrabajo/listarListaTrabajoAdministrador";
import ListarListaTrabajoTrabajador from "../pages/ListaTrabajo/listarListaTrabajoTrabajador";
import CrearListaTrabajo from "../pages/ListaTrabajo/crearListaTrabajo";
import ActualizarListaTrabajo from "../pages/ListaTrabajo/actualizarListaTrabajo";
import DetalleTrabajo from "../pages/ListaTrabajo/detalleListaTrabajoTrabajador";

import ListarPedidoAdministrador from "../pages/Pedidos/listarPedidoAdministrador";
import ListarPedidoVendedor from "../pages/Pedidos/listarPedidoVendedor";
import CrearPedido from "../pages/Pedidos/crearPedido";
import ActualizarPedido from "../pages/Pedidos/actualizarPedido";

import ListarProducto from "../pages/Productos/listarProducto";
import ListarProductoVendedor from "../pages/Productos/listarProductoVendedor";
import CrearProducto from "../pages/Productos/crearProducto";
import ActualizarProducto from "../pages/Productos/actualizarProducto";

import ListarTrabajador from "../pages/Trabajadores/listarTrabajador";
import CrearTrabajador from "../pages/Trabajadores/crearTrabajador";
import ActualizarTrabajador from "../pages/Trabajadores/actualizarTrabajardor";

import ProtectedRoute from "./PrivateRoute/protectedRoute";
import Perfilinfo from "../pages/Perfil/perfil";
import PerfilinfoTrabajador from "../pages/Perfil/perfilTrabajador";
import PerfilinfoVendedor from "../pages/Perfil/perfilVendedor";

import Unauthorized from "./PrivateRoute/Unauthorized";
import Notificaciones from "../pages/notificaciones";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Pantallas de Perfiles */}
        <Route path="/perfil" element={<ProtectedRoute element={<Perfilinfo />} role={1} />} />
        <Route path="/perfil/Trabajador" element={<ProtectedRoute element={<PerfilinfoTrabajador />} role={2} />} />
        <Route path="/perfil/Vendedor" element={<ProtectedRoute element={<PerfilinfoVendedor />} role={3} />} />

        {/* Pantallas de Bienvenida */}
        <Route path="/Administracion" element={<ProtectedRoute element={<BienvenidaAdmi />} role={1} />} />
        <Route path="/Artesano" element={<ProtectedRoute element={<BienvenidaTrabajador />} role={2} />} />
        <Route path="/Vendedor" element={<ProtectedRoute element={<BienvenidaVendedor />} role={3} />} />

        {/* Pantallas de Productos */}
        <Route path="/productos" element={<ListarProducto />} />
        <Route path="/productos/vendedor" element={<ListarProductoVendedor />} />
        <Route path="/crear/producto" element={<CrearProducto />} />
        <Route path="/editar/producto/:idProduct" element={<ActualizarProducto />} />

        {/* Pantallas de Trabajadores */}
        <Route path="/trabajadores" element={<ListarTrabajador />} />
        <Route path="/crear/trabajador" element={<CrearTrabajador />} />
        <Route path="/editar/trabajador/:idCardWorker" element={<ActualizarTrabajador />} />

        {/* Pantallas de Pedidos */}
        <Route path="/pedidos/administracion" element={<ListarPedidoAdministrador />} />
        <Route path="/pedidos/vendedor" element={<ListarPedidoVendedor />} />
        <Route path="/crear/pedidos" element={<CrearPedido />} />
        <Route path="/editar/pedidos/:idOrder" element={<ActualizarPedido />} />

        {/* Pantallas de Lista Trabajdos */}
        <Route path="/listaTrabajo/administracion" element={<ListarListaTrabajoAdministrador />} />
        <Route path="/listaTrabajo/Trabajador" element={<ListarListaTrabajoTrabajador />} />
        <Route path="/crear/listaTrabajo" element={<CrearListaTrabajo />} />
        <Route path="/editar/listaTrabajo"element={<ActualizarListaTrabajo />} />
        <Route path="/detalle/Trabajo/:idWorkList"element={<DetalleTrabajo/>} />

        {/* Pantalla noAutorizado */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Pantalla de Notificaciones */}
        <Route path="/notificaciones" element={<Notificaciones />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
