//어떤 프로젝트를 해도 형식은 똑같다. //보일러플레이트
import React, { Component } from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';

//devTool을 사용하게 해주는 코드
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devTools)
class AppContainer extends Component {
    render() {
        return (
            <Provider store = {store}>
                <App></App>
            </Provider>
        );
    }
}

export default AppContainer;