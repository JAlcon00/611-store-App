import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { 
  ShopOutline, 
  AppstoreOutline, 
  ProfileOutline, 
  FileTextOutline,
  ReloadOutline,
  ShoppingCartOutline,
  ClockCircleOutline,
  CheckCircleOutline,
  DollarCircleOutline,
  SearchOutline,
  EyeOutline,
  EditOutline,
  MoreOutline,
  CopyOutline,
  DownloadOutline,
  DeleteOutline,
  SyncOutline,
  CloseCircleOutline,
  QuestionCircleOutline
} from '@ant-design/icons-angular/icons';


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideNzIcons([
      ShopOutline,
      AppstoreOutline,
      ProfileOutline,
      FileTextOutline,
      ReloadOutline,
      ShoppingCartOutline,
      ClockCircleOutline,
      CheckCircleOutline,
      DollarCircleOutline,
      SearchOutline,
      EyeOutline,
      EditOutline,
      MoreOutline,
      CopyOutline,
      DownloadOutline,
      DeleteOutline,
      SyncOutline,
      CloseCircleOutline,
      QuestionCircleOutline
    ])
  ]
};
