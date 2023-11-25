import { deleteTransaction } from '../../redux/transactionsSlice';
import styles from './TransactionItem.module.css';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

const TransactionItem = ({item}) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteTransaction(item.id))
  };

  return (
    <tr className={styles.listItem}>
      <td>{item.name}</td>
      <td>{`Ksh ${item.amount.toLocaleString("en-US")}`}</td>
      <td>{item.type}</td>
      <td>
        <button className={styles.deleteBtn} onClick={handleDeleteItem}>x</button>
      </td>
    </tr>
  )
}
TransactionItem.propTypes = {
  item: PropTypes.object
}

export default TransactionItem