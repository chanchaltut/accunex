import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const StartupServices = () => {
  const service = SERVICES.find(s => s.slug === 'startup-services');
  return <ServicePage service={service} />;
};

export default StartupServices;
