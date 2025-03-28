import { useState, useEffect } from "react";
import axios from "axios";
import api from "../services/api";
import { data } from "react-router-dom";

const useCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCategorias = async () => {
        setLoading(true);
        try {
            const response = await api.get("/categoria");
            setCategorias(response.data.categorias);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategorias();
    }, []);

    return { categorias, loading, error};
};

export default useCategorias;