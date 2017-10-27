import {combineReducers} from 'redux';
import IndividualProjectsReducer from './individualProjects';

const MainReducer = combineReducers({
    projectDetails: IndividualProjectsReducer
});

export default MainReducer;
