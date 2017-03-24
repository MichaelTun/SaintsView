export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'property',
        data: {
          menu: {
            title: 'Property / Unit',
            icon: 'ion-android-home',
            pathMatch: 'prefix',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },
      {
        path: 'sales',
        data: {
          menu: {
            title: 'Timeshare Sales',
            icon: 'ion-android-options',
            pathMatch: 'prefix',
            selected: false,
            expanded: false,
            order: 200,
          }
        }
      },
      {
        path: 'enquiry',
        data: {
          menu: {
            title: 'Enquiry',
            icon: 'ion-document-text',
            pathMatch: 'prefix',
            selected: false,
            expanded: false,
            order: 300,
          }
        }
      }
    ]
  }
];
