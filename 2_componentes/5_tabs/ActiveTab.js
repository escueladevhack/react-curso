import React, { PropTypes } from 'react';

const ActiveTab = (props) => {
  const { content, title } = props;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {content}
      </div>
    </div>
  )
};

ActiveTab.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ActiveTab;
