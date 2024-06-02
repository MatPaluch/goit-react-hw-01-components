import { Component } from "react";
import PropTypes from "prop-types";
import Styles from "./FriendListItem.module.css";

export default class FriendListItem extends Component {
  static defaultProps = {};
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };
  render() {
    return (
      <>
        <li className={Styles.item}>
          <span
            className={
              this.props.isOnline === true ? Styles.online : Styles.offline
            }></span>
          <img
            className={Styles.avatar}
            src={this.props.avatar}
            alt="User avatar"
            width="64"
          />
          <p className={Styles.name}>{this.props.name}</p>
        </li>
      </>
    );
  }
}
