import { HttpClient } from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store } from '../models/store.models';

@Injectable({
  providedIn: 'root'
})
export class ShopServices {
  
  constructor(
    private httpClient : HttpClient
  ) { }
  
  // RXJS -> REACTIVE EXTENSIONS FOR JAVASCRIPT
  // Observable -> Observer + Iterable
  // Observer -> next, error, complete
  // Iterable -> forEach, map, filter, reduce
  getAllStores(){
    console.log("Trayendome las tiendas");  
    const result = this.httpClient.get<Store[]>(`${environment.API_URL}/Store`)
    return result;
  } 

}
