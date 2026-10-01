import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const IECRegistration = () => {
  const service = SERVICES.find(s => s.slug === 'iec-registration');
  return <ServicePage service={service} />;
};

export default IECRegistration;
