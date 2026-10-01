import React from 'react';
import { SERVICES } from '../../utils/constants';
import ServicePage from './ServicePage';

const ProjectReports = () => {
  const service = SERVICES.find(s => s.slug === 'project-reports');
  return <ServicePage service={service} />;
};

export default ProjectReports;
