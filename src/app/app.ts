import { Component, signal } from '@angular/core';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { PagesModule } from './pages/pages-module';

@Component({
  selector: 'app-root',
  imports: [PagesModule, SideBarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('store-app');
}
