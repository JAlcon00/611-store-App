import { Routes } from '@angular/router';
import { ShopComponent } from './shop.component/shop.component';
import { OrdersComponent } from './orders.component/orders.component';
import { ProductsComponent } from './products.component/products.component';
import { InvoicesComponent } from './invoices.component/invoices.component';
import { AdminLayout } from './admin-layout/admin-layout';


export const AdminRoutes : Routes = [
    {
        // Admin layout
        path: 'admin',
        component: AdminLayout,
        children: [
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'invoices',
                component: InvoicesComponent
            },
            {
                path: 'orders',
                component: OrdersComponent
            },
            {
                path: 'shop',
                component: ShopComponent
            },
            {
                path: '',
                redirectTo: 'shop',
                pathMatch: 'full'
            }
        ]
    }
];