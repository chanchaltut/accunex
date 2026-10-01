import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const Trademark = () => {
  const service = SERVICES.find(s => s.slug === 'trademark');
  return <ServicePage service={service} />;
};

export default Trademark;
