import * as React from "react";
import List from "components/List";
import Shortcut from "./Shortcut";
import cx from "classnames";
import css from "./styles.module.scss";

const activeClassName = css.active;
const links = [
  [
    {
      to: '/',
      text: 'Transfer',
      iconClass: 'icon-transfer u-mr1',
      activeClassName,
    },
    {
      to: '/transactions',
      text: 'Transaction History',
      iconClass: 'icon-history u-mr1',
      activeClassName,
    },
    {
      to: '/permissions',
      text: 'Permissions',
      iconClass: 'icon-permissions u-mr1',
      activeClassName,
    },
    {
      to: '/logout',
      text: 'Logout',
      iconClass: 'icon-logout u-mr1',
      activeClassName,
    },
  ],
  {
    to: '/users',
    text: 'Users',
    activeClassName,
  },
  {
    to: '/about',
    text: 'About',
    activeClassName,
  },
  {
    to: '/faq',
    text: 'FAQ',
    activeClassName,
  },
];

const Shortcuts = ({
  className,
  data,
}) => (
  <List
    className={cx("menulist", css.menulist)}
    data={data || links}
    renderItem={Shortcut}
  />
);

export default Shortcuts;
