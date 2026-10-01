import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const TaxNotices = () => {
  const service = SERVICES.find(s => s.slug === 'tax-notices');
  return <ServicePage service={service} />;
};

export default TaxNotices;
