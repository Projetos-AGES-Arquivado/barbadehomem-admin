import React from "react";
import { statusParser } from "../../utils";
import { ChipField } from "react-admin";

const StatusInput = (props) => {
  const status = props.record.status;

  props.record.status = statusParser(status);

  return (
    <>
      <ChipField {...props} />
    </>
  );
};

export default StatusInput;
