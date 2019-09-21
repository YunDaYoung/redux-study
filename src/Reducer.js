//어떤 프로젝트를 해도 형식은 똑같다. //보일러플레이트
import { combineReducers } from 'redux';
import counter from './Counter';

export default combineReducers ({
    counter
})