import { Routes } from '@angular/router';

// You can add your admin routes here
// http:localhost:4200/admin/products
// http:localhost:4200/admin/invoices
// http:localhost:4200/admin/orders
// http:localhost:4200/admin/shop
export const routes: Routes = [
    {path: '', redirectTo: 'admin', pathMatch: 'full'},
    {
        path: '',
        loadChildren: () => import('./pages/pages-module').then(m => m.PagesModule)

    }

    
];
