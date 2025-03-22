import { useState, useEffect } from "react";
import axios from "axios";
import api from "../services/api";
import { data } from "react-router-dom";

const useUsuario = (email) => {
    const [usuario, setUsuario] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsuario = async () => {
        console.log(email)
        setLoading(true);
        try {
            const response = await api.get(`/usuario/${localStorage.getItem('email')}`);
            console.log(response)
            setUsuario(response.data.categorias);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsuario();
    }, []);

    return { usuario, loading, error};
};

export default useUsuario;