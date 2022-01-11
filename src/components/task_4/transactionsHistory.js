import PropTypes from 'prop-types';
import style from './transaction.module.css';

export default function TransactionsHistory({ items }) {
  return (
    <table className={style.transactionTable}>
      <thead className={style.transactionHead}>
        <tr className={style.tableRows}>
          <th className={style.tableHeaders}>Type</th>
          <th className={style.tableHeaders}>Amount</th>
          <th className={style.tableHeaders}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.tableBody}>
        {items.map(item => (
          <tr className={style.tableRows} key={item.id}>
            <td className={style.tableCells}>{item.amount}</td>
            <td className={style.tableCells}>{item.type}</td>
            <td className={style.tableCells}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
