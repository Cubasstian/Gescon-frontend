import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'home-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'MEDIDAS',
    group: true,
  },
  {
    title: 'Energía activa',
    icon: 'activity-outline',
    link: '/active',
  },
  {
    title: 'Reactiva capacitiva',
    icon: 'activity-outline',
    link: '/power-factor',
  },
  {
    title: 'Energía reactiva',
    icon: 'activity-outline',
    link: '/reactive',
  },
  {
    title: 'Consolidado de cargos',
    icon: 'activity-outline',
    link: '/reactive',
  },
  {
    title: 'Excesos de reactiva',
    icon: 'activity-outline',
    link: '/reactive',
  },
  {
    title: 'Factor de potencia',
    icon: 'activity-outline',
    link: '/power-factor',
  },
 
  {
    title: 'Exceso de reactivos',
    icon: 'activity-outline',
    link: '/excess',
  },
  {
    title: 'Precios de bolsa',
    icon: 'activity-outline',
    link: '/prices',
  },
  {
    title: 'Energía inductiva',
    icon: 'activity-outline',
    hidden: true,
    link: '/inductive',
  },
  {
    title: 'Energía capacitiva',
    icon: 'activity-outline',
    hidden: true,
    link: '/capacitive',
  },
];

export const PROFILE_ITEMS: NbMenuItem[] = [

  {
    title: 'información',
    icon: 'person-outline',
    link: '/infoclient',
  },
  {
    title: 'Asignar',
    icon: 'person-add-outline',
    link: '/create-user',
  },
  {
    title: 'Cerrar sesión',
    icon: 'log-out-outline',
    link: '/logout',
  },
];
