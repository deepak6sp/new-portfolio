import json from './projectsJson';

export const getProjects = () => {
  return {
    type: 'GET_PROJECTS',
    payload: json
  }
};
