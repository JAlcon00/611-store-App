import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient: HttpClient) { }

  getAllStores(){
    console.log(`El url de la api viene de: ${environment.API_URL}`);
    const result = this.httpClient.get<Store[]>(`${environment.API_URL}/Store`);
    return result;
  }

  
}
