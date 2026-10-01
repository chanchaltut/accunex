import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const Accounting = () => {
  const service = SERVICES.find(s => s.slug === 'accounting');
  return <ServicePage service={service} />;
};

export default Accounting;
