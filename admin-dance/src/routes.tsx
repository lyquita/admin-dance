const routes = [
    {
        path: 'main',
        element: null,
        children: [
            { path: 'dashboard', element: null}
        ]
    },
    {
        path: '/',
        element: null,
        children: [
            { path: 'login', element: null}
        ]
    }
]

export default routes;