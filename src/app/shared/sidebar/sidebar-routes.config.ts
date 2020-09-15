import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/', title: 'Home', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Employee', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, 
        submenu: [
            {
                path: '/employee/add', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/employee/all', title: 'View Employees', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Department', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, 
        submenu: [
            {
                path: '/employee/add', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/employee/all', title: 'View Employees', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Delivery', icon: 'icon-rocket', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, 
        submenu: [
            {
                path: '/employee/add', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/employee/all', title: 'View Employees', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'ISO Documents', icon: 'ft-file', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, 
        submenu: [
            {
                path: '/employee/add', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/employee/all', title: 'View Employees', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },

    // Following are examples of different types of menus that having upto 3 levels of menus. 

    // {
    //     path: '/full-layout', title: 'Full Layout', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '/content-layout', title: 'Content Layout', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    //     submenu: [
    //         { path: 'javascript:;', title: 'Second Level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         {
    //             path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    //             submenu: [
    //                 { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //                 { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    // { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

];
