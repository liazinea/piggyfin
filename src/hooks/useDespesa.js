import { useState, useEffect } from "react";
import axios from "axios";
import api from "../services/api";
import { data } from "react-router-dom";

const useDespesas = () => {
    const [despesas, setDespesas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDespesas = async () => {
        setLoading(true);
        try {
            const response = await api.get("/despesas");
            setDespesas(response.data.despesas);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDespesas();
    }, []);

    return { despesas, loading, error};
};

export default useDespesas;