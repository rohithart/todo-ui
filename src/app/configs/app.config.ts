import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  routes: {
    home: 'home',
    todo: 'todo',
    error404: '404'
  },
};
