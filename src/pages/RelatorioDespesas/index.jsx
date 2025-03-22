import styles from "./index.module.scss";
import TabelaRelatorio from "../../components/TabelaRelatorio";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RelatorioDespesas = () => {
  return (
    <div>
      <Navbar/>
    <div className={styles.principal}>
      <h1 className={styles.titulo}>Relatório de despesas</h1>
      <div className={styles.tabela}>
        <TabelaRelatorio
          data={[
            {
              descricao: "Água",
              categoria: "Despesas Fixas",
              valor: 120.5,
              data: "2025-01-21",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 121.0,
              data: "2025-01-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 122.0,
              data: "2025-02-23",
            },
            {
              descricao: "Água",
              categoria: "Despesas Fixas",
              valor: 123.0,
              data: "2025-02-21",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 124.0,
              data: "2025-03-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 125.0,
              data: "2025-03-23",
            },
            {
              descricao: "Água",
              categoria: "Despesas Fixas",
              valor: 126.0,
              data: "2025-04-21",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 127.0,
              data: "2025-04-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 128.0,
              data: "2025-05-23",
            },
            {
              descricao: "Água",
              categoria: "Despesas Fixas",
              valor: 129.0,
              data: "2025-05-21",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 130.0,
              data: "2025-06-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 131.0,
              data: "2025-06-23",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 130.0,
              data: "2025-07-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 131.0,
              data: "2025-07-23",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 130.0,
              data: "2025-08-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 131.0,
              data: "2025-08-23",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 130.0,
              data: "2025-09-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 131.0,
              data: "2025-09-23",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 130.0,
              data: "2025-10-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 131.0,
              data: "2025-10-23",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 130.0,
              data: "2025-11-22",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 131.0,
              data: "2025-11-23",
            },
            {
              descricao: "Luz",
              categoria: "Despesas Fixas",
              valor: 130.0,
              data: "2025-12-26",
            },
            {
              descricao: "Internet",
              categoria: "Despesas Fixas",
              valor: 131.0,
              data: "2025-12-23",
            },
          ]}
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default RelatorioDespesas;
