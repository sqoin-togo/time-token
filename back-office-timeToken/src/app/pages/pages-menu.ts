import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'ion-home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Manage Companies',
    icon: 'ion ion-card',
    home: true,
    link: '/pages/companies'
  },
  {
    title: 'Manage promotions',
    icon: ' ion ion-briefcase',
    home: true,
    link: '/pages/promotions'
  },
  {
    title: 'Manage activities',
    icon: ' ion ion-android-checkbox-outline',
    home: true,
    link: '/pages/activities'
  },
  {
    title: 'Manage Transactions',
    icon: 'ion-cash',
    home: true,
    children:[ 
      {
        title: 'In Transactions',
        icon: 'ion-log-in',
        link: '/pages/transactions/in-transactions',
      },
      {
        title: 'Out Transactions',
        icon: 'ion-log-out',
        link: '/pages/transactions/out-transactions',
      },
    ],
  },
  {
    title: 'Manage Users',
    icon: 'ion-person',
    home: true,
    children:[ 
      {
        title: 'Users List',
        icon: 'nb-plus',
        link: '/pages/users',
      },
      {
        title: 'Admins List',
        icon: 'nb-plus',
        link: '/pages/admins',
      },
    ],
  },
  {
    title: 'Account',
    icon: 'ion-gear-b',
    home: true,
    link: '/pages/myAccount',
  },
  {
    title: 'Help',
    icon: 'ion-help-buoy',
    home: true,
    link: '/pages/help-center',
  },
  {
    title: '',
      link: '',
  },

];
