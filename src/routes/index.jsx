import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RelatorioDespesas from "../pages/RelatorioDespesas";
import Home from "../pages/Home";
import CadastroUsuario from "../pages/CadastroUsuario";
import CadastroDespesas from "../pages/CadastroDespesas";
import Login from "../pages/Login";
import PerfilUsuario from "../pages/PerfilUsuario";
import ProtectedRoute from '../components/ProtectedRoutes';

export const Paths = () => {
    return (
        <>
            <BrowserRouter basename={"/"}>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path={'/cadastro-usuario'} element={<CadastroUsuario />} />
                    <Route element={<ProtectedRoute/>}>
                        <Route path={'/cadastro-despesas'} element={<CadastroDespesas />} />
                        <Route path={'/home'} element={<Home />} />
                        <Route path={'/perfil-usuario'} element={<PerfilUsuario />} />
                        <Route path={'/relatorio-despesas'} element={<RelatorioDespesas />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}