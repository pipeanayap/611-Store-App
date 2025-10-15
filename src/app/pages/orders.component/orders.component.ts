import { Component } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';

@Component({
  selector: 'app-orders.component',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  constructor(private orderService: OrderService) {}

  orders : Order[] = [];

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((res) => {
      this.orders = res; // ¡Aquí estaba el problema! Faltaba asignar los datos
      console.log('Orders loaded:', res);
    });
  }

  showModal(order : Order){
    console.log(order)
  }
}
