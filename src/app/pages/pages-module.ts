import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ShopComponent } from './shop.component/shop.component';
import { OrdersComponent } from './orders.component/orders.component';
import { ProductsComponent } from './products.component/products.component';
import { InvoicesComponent } from './invoices.component/invoices.component';
import { ShopService } from '../core/services/shop.service';
import { AdminLayout } from './admin-layout/admin-layout';
import { AdminRoutes } from './pages.routes';



@NgModule({
  declarations: [
    ShopComponent,
    OrdersComponent,
    ProductsComponent,
    InvoicesComponent,
    AdminLayout
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes),
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzTagModule,
    NzInputModule,
    NzSelectModule,
    NzEmptyModule,
    NzDropDownModule,
    NzToolTipModule
  ],


  providers: [ShopService],

  exports: [
    ShopComponent,
    OrdersComponent,
    ProductsComponent,
    InvoicesComponent,
    AdminLayout,
    RouterModule
  ]
})
export class PagesModule { }
