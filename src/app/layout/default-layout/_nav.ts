import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }    
  },
  {
    name: 'Usuarios',
    url: '/app/users',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Fotos',
    url: '/app/photos',    
    iconComponent: { name: 'cil-image' }
  }, 
  
];
