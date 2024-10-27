import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { SendComponent } from './pages/send/send.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ordem', component: OrderComponent},
    {path: 'envio',component: SendComponent}
];
