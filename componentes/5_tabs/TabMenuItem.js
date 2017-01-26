import React, { PropTypes } from 'react';

const TabMenuItem = (props) => {
  const { changeTab, sort, title, active } = props;
  const styles = {
    cursor: 'pointer',
    textDecoration: active === sort ? 'underline' : 'none',
    float: 'left',
    listStyleType: 'none',
    padding: '10px'
  };

  return (
    <li style={styles} onClick={changeTab.bind(null, sort)}>
      {title}
    </li>
  )
};

TabMenuItem.propTypes = {
  active: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
  sort: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TabMenuItem;