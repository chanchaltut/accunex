import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const MSMERegistration = () => {
  const service = SERVICES.find(s => s.slug === 'msme-registration');
  return <ServicePage service={service} />;
};

export default MSMERegistration;
