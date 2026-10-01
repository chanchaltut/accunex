import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const ROCCompliance = () => {
  const service = SERVICES.find(s => s.slug === 'roc-compliance');
  return <ServicePage service={service} />;
};

export default ROCCompliance;
