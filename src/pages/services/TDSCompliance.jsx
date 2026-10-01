import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const TDSCompliance = () => {
  const service = SERVICES.find(s => s.slug === 'tds-compliance');
  return <ServicePage service={service} />;
};

export default TDSCompliance;
