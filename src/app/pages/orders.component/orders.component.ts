import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../../core/models/order.model';
import { OrderService } from '../../core/services/order.service';



@Component({
  selector: 'app-orders.component',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  standalone: false,
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  searchTerm: string = '';
  statusFilter: string = '';

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    console.log('OrdersComponent initialized, loading orders...');
    this.loadOrders();
  }

  loadOrders() {
    console.log('Attempting to load orders from API...');
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        console.log('Orders loaded successfully:', data);
        console.log('Number of orders received:', data.length);
        this.orders = data;
        this.filteredOrders = [...this.orders];
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        console.error('Full error object:', error);
        
        // Mostrar el error específico
        if (error.status === 0) {
          console.error('Network error - API server might be down or CORS issue');
        } else if (error.status === 404) {
          console.error('API endpoint not found');
        } else if (error.status >= 500) {
          console.error('Server error');
        }
        
        // Cargar datos de prueba si falla la API
        console.log('Loading mock data as fallback...');
        this.loadMockData();
      },
      complete: () => {
        console.log('Orders loading completed');
      }
    });
  }

  // Método para cargar datos de prueba
  loadMockData() {
    const mockOrders: Order[] = [
      {
        id: 1,
        total: 299.99,
        createdAt: '2024-10-01T10:30:00Z',
        userId: 101
      },
      {
        id: 2,
        total: 149.50,
        createdAt: '2024-10-01T14:15:00Z',
        userId: 102
      },
      {
        id: 3,
        total: 89.99,
        createdAt: '2024-10-01T16:45:00Z',
        userId: 103
      },
      {
        id: 4,
        total: 567.25,
        createdAt: '2024-09-30T09:20:00Z',
        userId: 104
      },
      {
        id: 5,
        total: 23.75,
        createdAt: '2024-09-30T18:30:00Z',
        userId: 105
      }
    ];
    
    console.log('Mock data loaded:', mockOrders);
    this.orders = mockOrders;
    this.filteredOrders = [...this.orders];
  }

  // Statistics methods
  getPendingOrdersCount(): number {
    // Simulamos estados basados en fecha o ID para demo
    return Math.floor(this.orders.length * 0.3);
  }

  getCompletedOrdersCount(): number {
    // Simulamos estados basados en fecha o ID para demo
    return Math.floor(this.orders.length * 0.6);
  }

  getTotalRevenue(): number {
    return this.orders.reduce((total, order) => total + order.total, 0);
  }

  // Filter methods
  filterOrders() {
    this.filteredOrders = this.orders.filter(order => {
      const matchesSearch = this.searchTerm === '' || 
        order.id.toString().includes(this.searchTerm) ||
        order.userId.toString().includes(this.searchTerm);

      // Por ahora no filtramos por status ya que no está en el modelo
      const matchesStatus = this.statusFilter === '';

      return matchesSearch && matchesStatus;
    });
  }

  // Status helper methods
  getStatusColor(status: string): string {
    switch (status) {
      case 'completed':
        return 'green';
      case 'processing':
        return 'blue';
      case 'pending':
        return 'orange';
      case 'cancelled':
        return 'red';
      default:
        return 'default';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed':
        return 'check-circle';
      case 'processing':
        return 'sync';
      case 'pending':
        return 'clock-circle';
      case 'cancelled':
        return 'close-circle';
      default:
        return 'question-circle';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'processing':
        return 'Procesando';
      case 'pending':
        return 'Pendiente';
      case 'cancelled':
        return 'Cancelado';
      default:
        return 'Desconocido';
    }
  }

  // Action methods
  viewOrderDetails(order: Order) {
    console.log('Viewing order details:', order);
    // Implementar navegación a detalles
  }

  editOrder(order: Order) {
    console.log('Editing order:', order);
    // Implementar edición de orden
  }

  duplicateOrder(order: Order) {
    console.log('Duplicating order:', order);
    // Implementar duplicación de orden
  }

  downloadInvoice(order: Order) {
    console.log('Downloading invoice for order:', order);
    // Implementar descarga de factura
  }

  cancelOrder(order: Order) {
    console.log('Cancelling order:', order);
    // Implementar cancelación de orden
  }

  // Helper methods for simulated data
  getSimulatedStatus(order: Order): string {
    // Simular estado basado en el ID de la orden
    const statuses = ['pending', 'processing', 'completed', 'cancelled'];
    return statuses[order.id % statuses.length];
  }

  getSimulatedProductCount(order: Order): number {
    // Simular cantidad de productos basado en el ID
    return (order.id % 5) + 1;
  }

  ngOnDestroy() {
    // Cleanup if necessary
  }
}
