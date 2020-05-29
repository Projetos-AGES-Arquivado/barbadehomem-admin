import React from 'react';
import { TextField } from 'react-admin';

import { formattedServices } from '../../utils';

const ServicesField = ({ record, ...props }) => {
  const services = formattedServices(record.services);

  return <TextField {...props} emptyText={services} />;
};

export default ServicesField;
