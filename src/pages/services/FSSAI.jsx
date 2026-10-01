import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const FSSAI = () => {
  const service = SERVICES.find(s => s.slug === 'fssai');
  return <ServicePage service={service} />;
};

export default FSSAI;
