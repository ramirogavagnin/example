export const getActiveRouteState = route => {
    if (
        !route.routes ||
        route.routes.length === 0 ||
        route.index >= route.routes.length
    ) {
        return route
    }

    const childActiveRoute = route.routes[route.index]

    return getActiveRouteState(childActiveRoute)
}

export const navigateToScreen = (nextRoute, props) => {
    const { navigation, onPress } = props
    const activeRoute = getActiveRouteState(navigation.state)
    const { routeName } = activeRoute
    if (routeName === nextRoute) {
        navigation.toggleDrawer()
    } else {
        navigation.navigate(nextRoute)
    }
}
