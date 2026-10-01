import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const DSC = () => {
  const service = SERVICES.find(s => s.slug === 'dsc');
  return <ServicePage service={service} />;
};

export default DSC;
