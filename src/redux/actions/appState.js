/*action*/
export const CHANGEMENU = "appState/CHANGEMENU";
export const CHANGEKEYWORD = "appState/CHANGEKEYWORD";

export function changeMenu(menuKey) {
    debugger
    return {
        type: CHANGEMENU,
        menuKey:menuKey
    }
}

export function changeKeyword(keyword) {
    return {
        type: CHANGEKEYWORD,
        keyword:keyword
    }
}


