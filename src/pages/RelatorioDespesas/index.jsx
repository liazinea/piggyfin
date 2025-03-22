import styles from "./index.module.scss";
import TabelaRelatorio from "../../components/TabelaRelatorio";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import useDespesas from "../../hooks/useDespesa";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const RelatorioDespesas = () => {
   const { token } = useAuth();
   console.log(token)
    useEffect(() => {
      if (!token) {
        Navigate('/')
      }
    }, [token])
    
  const {despesas} = useDespesas()
  return (
    <div>
      <Navbar/>
    <div className={styles.principal}>
      <h1 className={styles.titulo}>Relatório de despesas</h1>
      <div className={styles.tabela}>
        <TabelaRelatorio
          data={despesas}
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default RelatorioDespesas;
