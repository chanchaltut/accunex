import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const CompanyRegistration = () => {
  const service = SERVICES.find(s => s.slug === 'company-registration');
  return <ServicePage service={service} />;
};

export default CompanyRegistration;
