import styles from './Home.module.css';
import Form from '../../components/Form/Form';
import TransactionList from '../../components/TransactionList/TransactionList';
import { useSelector } from 'react-redux';

const Home = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const totalValue = transactions?.reduce((prev, curr) => prev + curr.amount, 0);
  return (
    <div className={styles.container}>
      <h2 className={styles.appTitle}>Budget Tracker App</h2>
      <div className={styles.top}>
        <div className={styles.balance}>
          <h3 className={styles.balanceTitle}>{`Balance: Ksh ${totalValue.toLocaleString("en-US")}`}</h3>
        </div>
        <Form />
      </div>
      <TransactionList transactions={transactions}/>
    </div>
  )
}

export default Home