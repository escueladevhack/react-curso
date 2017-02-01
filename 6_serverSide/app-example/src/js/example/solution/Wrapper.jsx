import React, { PropTypes } from 'react';
import { Grid } from 'react-mdl';

const Wrapper = (props) => {
  const { children } = props;

  return (
    <Grid style={{ width: '600px', background: 'white', color: 'black', margin: '0 auto' }}>
      {children}
    </Grid>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
