import {combineReducers} from 'redux';
import IndividualProjectsReducer from './individualProjects';

const MainReducer = combineReducers({
    newProject: IndividualProjectsReducer
});

export default MainReducer;
