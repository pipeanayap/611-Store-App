import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopServices } from '../core/services/shop.services';
import { ShopComponent } from './shop.component/shop.component';
import { OrdersComponent } from './orders.component/orders.component';
import { ProductsComponent } from './products.component/products.component';
import { InvoicesComponent } from './invoices.component/invoices.component';
import { AdminLayout } from './admin-layout/admin-layout';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { OrderService } from '../core/services/order.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { OrderDetailComponent } from './order-detail.component/order-detail.component';
import { NzTagModule } from 'ng-zorro-antd/tag';



@NgModule({
  declarations: [ShopComponent, OrdersComponent, ProductsComponent, InvoicesComponent, AdminLayout, OrderDetailComponent],
  imports: [
    NzTagModule,NzTableModule, NzIconModule, NzButtonModule, NzCardModule, CommonModule, RouterModule.forChild(routes),
  ],
  providers: [ShopServices, OrderService],
  exports: [ShopComponent, OrdersComponent, ProductsComponent, InvoicesComponent, AdminLayout, RouterModule, OrderDetailComponent, NzTagModule]
})
export class PagesModule { }


/*
PASOS PARA OBTENER LOS DATOS DE UNA API
1. VER LA RESPUESTA DE LA API
CREAR LOS MODELOS
CREAR EL SERVICIO (CREAR METODOS Y PETIICIONES A TRAVES DEL HTTPCLIENT)
AGREGAR EL SERVICIO AL MODULO OOOOO AL STANDALONE COMPONENT
UTILIZAR EL SERVICIO EN EL COMPONENTE 


*/
