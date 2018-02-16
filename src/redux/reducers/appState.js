import {CHANGEMENU, CHANGEKEYWORD} from '../actions/appState';
/*
* 初始化state
 */
const initState = {
    menuKey: 'index',
    keyword:""
};

/*
* reducer
 */
export default function reducer(state = initState, action) {
    debugger
    switch (action.type) {
        case CHANGEMENU:
            return {
                ...state,
                menuKey: action.menuKey,
            };
        case CHANGEKEYWORD:
            return  {
                ...state,
                keyword: action.keyword
            };
        default:
            return state
    }
}

