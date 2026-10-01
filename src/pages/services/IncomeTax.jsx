import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const IncomeTax = () => {
  const service = SERVICES.find(s => s.slug === 'income-tax');
  return <ServicePage service={service} />;
};

export default IncomeTax;
