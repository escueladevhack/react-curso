import { createStore } from 'redux';
import reducers from '../reducer/index';

export default createStore(reducers,
    window.devToolsExtension && window.devToolsExtension()
);
