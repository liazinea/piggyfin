import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  console.log(localStorage.getItem('token'))
  return (
    <div>
      <Navbar />
      <div className={styles.principal}>
        <div className={styles.cards}>
          <Link to='/cadastro-despesas' className={styles.card}>
            <h2>Cadastrar despesas</h2>
            <p>
              Faça seu controle financeiro e tenha mais autonomia sobre seu
              próprio dinheiro.
            </p>
          </Link>
          <Link to="/relatorio-despesas" className={styles.card}>
            <h2>Relatório de despesas</h2>
            <p>
              Identifique excessos, ajuste seu orçamento e tome decisões
              financeiras mais inteligentes.
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
