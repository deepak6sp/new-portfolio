
/**
 * Action call for dashboard Container
 * It takes a string as parameter and returns a key-value object of type and payload
 * 'type' and 'payload' is standardized here
 * @param  {Text} text value of input/textarea field
 * @return {Objects} where payload is the value of input/textarea field
 */

import json from './projectsJson';

// export const getProjectDetails = slug => ({
//     type: 'GET_PROJECT_DETAILS',
//     payload: json[slug]
// });
//


export const getProjectDetails = slug => {
  return {
    type: 'GET_PROJECT_DETAILS',
    payload: json[slug]
  }
};
