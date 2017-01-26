import React from 'react';

export default (props) => {
  const {name, password} =props;

  return (
    <div>
      <div>Name = {name}</div>
      <div>Password = {password}</div>
    </div>
  )
}