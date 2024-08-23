import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr className={style.tabletr}>
          <th className={style.tableth}>Type</th>
          <th className={style.tableth}>Amount</th>
          <th className={style.tableth}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={style.tabletr} key={id}>
              <td className={style.tabletd}>{type}</td>
              <td className={style.tabletd}>{amount}</td>
              <td className={style.tabletd}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
