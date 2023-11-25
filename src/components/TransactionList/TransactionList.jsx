import styles from './TransactionList.module.css';
import TransactionItem from "../TransactionItem/TransactionItem";
import PropTypes from 'prop-types';

const TransactionList = ({ transactions }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? transactions.map((item) => (
          <TransactionItem key={item.id} item={item} />
        )): (
          <tr>
            <td>
              <p className={styles.empty}>No transactions</p>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}
TransactionList.propTypes = {
  transactions: PropTypes.array
}

export default TransactionList