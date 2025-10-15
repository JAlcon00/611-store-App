import { Order} from '../models/order.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment.development';
import { Store } from '../models/store.model';


@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(private http: HttpClient) {}


    getAllOrders(): Observable<Order[]> {
        try {
            console.log(`El url de la api viene de: ${environment.API_URL}`);
            const fullUrl = `${environment.API_URL}/Order`;
            console.log(`Full API URL: ${fullUrl}`);
            const result = this.http.get<Order[]>(fullUrl);
            console.log('HTTP request created, returning observable...');
            return result;
        } catch (error) {
            console.error('Error accessing environment variable:', error);
            throw error;
        }
    }

    getOrderById(id: number): Observable<Order> {
        try {
            console.log(`El url de la api viene de: ${environment.API_URL}`);
        } catch (error) {
            console.error('Error accessing environment variable:', error);
        }
        return this.http.get<Order>(`${environment.API_URL}/Order/${id}`);
    }

    createOrder(order: Partial<Order>): Observable<Order> {
        try {
            console.log(`El url de la api viene de: ${environment.API_URL}`);
        } catch (error) {
            console.error('Error accessing environment variable:', error);
        }
        return this.http.post<Order>(`${environment.API_URL}/Order`, order);
    }

    updateOrder(id: number, order: Partial<Order>): Observable<Order> {
        try {
            console.log(`El url de la api viene de: ${environment.API_URL}`);
        } catch (error) {
            console.error('Error accessing environment variable:', error);
        }
        return this.http.put<Order>(`${environment.API_URL}/Order/${id}`, order);
    }
    
    deleteOrder(id: number): Observable<void> {
        try {
            console.log(`El url de la api viene de: ${environment.API_URL}`);
        } catch (error) {
            console.error('Error accessing environment variable:', error);
        }
        return this.http.delete<void>(`${environment.API_URL}/Order/${id}`);
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${environment.API_URL}/User/${id}`);
    }

    getStoreById(id: number): Observable<Store> {
        return this.http.get<Store>(`${environment.API_URL}/Store/${id}`);
    }

}
    