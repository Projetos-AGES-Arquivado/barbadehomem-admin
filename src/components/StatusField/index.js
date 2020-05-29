import React from 'react';
import { statusParser } from '../../utils';
import { ChipField, TextField } from 'react-admin';

const StatusField = props => {
  const status = props.record.status;

  props.record.status = statusParser(status);

  return (
    <>
      <TextField {...props} />
    </>
  );
};

export default StatusField;
