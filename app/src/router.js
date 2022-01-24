const routes = [
    {
        path: "/",
        component: Start
    },
    {
        path: "/login", // For users
        component: AuthGuard // For devs
    },
    // Example:
    // {
    //     path: "/profile",
    //     component: Profile,
    //     beforeEnter: authGuard
    // }
]

export default createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

