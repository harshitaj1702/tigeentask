const initialState = {
    companyLogo: "left",
    color: "#1976d2",
    header: true,
    footer: true,
    drawer: true,
    leftSideDrawer: true,
    rightSideDrawer: true,
    navigationTabs: true,
    bottomMenu: true
}
export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMPANY':
            state.companyLogo = action.payload
            return { ...state }
        case 'ADD_COLOR':
            state.color = action.payload
            return { ...state }
        case 'SHOW_HEADER':
            state.header = !state.header
            if (!state.header) {
                state.navigationTabs = false
                state.drawer = false
            }
            return { ...state }
        case 'SHOW_NAVIGATION':
            state.navigationTabs = !state.navigationTabs
            if (state.navigationTabs) {
                state.header = true
            }
            return { ...state }
        case 'SHOW_FOOTER':
            state.footer = !state.footer
            if (!state.footer) {
                state.bottomMenu = false
                state.drawer = false
            }
            return { ...state }
        case 'SHOW_DRAWER':
            state.drawer = !state.drawer
            if (state.drawer) {
                state.header = true
                state.footer = true
                state.leftSideDrawer = true
                state.rightSideDrawer = true
            }
            return { ...state }
        case 'SHOW_LEFT_DRAWER':
            state.leftSideDrawer = !state.leftSideDrawer
            if (!state.leftSideDrawer) {
                state.drawer = false
            }
            return { ...state }
        case 'SHOW_RIGHT_DRAWER':
            state.rightSideDrawer = !state.rightSideDrawer
            if (!state.rightSideDrawer) {
                state.drawer = false
            }
            return { ...state }
        case 'SHOW_BOTTOMMENU':
            state.bottomMenu = !state.bottomMenu
            if (state.bottomMenu) {
                state.footer = true
            }
            return { ...state }
        default:
            return state;
    }
}
