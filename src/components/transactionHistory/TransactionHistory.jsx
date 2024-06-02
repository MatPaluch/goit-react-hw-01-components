import { Component } from "react";
import PropTypes from "prop-types";
import Styles from "./TransactionHistory.module.css";

export default class TransactionHistory extends Component {
  static defaultProps = {};
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      }),
    ),
  };

  render() {
    return (
      <>
        <section className={Styles.section_transaction_history}>
          <table className={Styles.transaction_history}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody>
              {this.props.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </>
    );
  }
}
