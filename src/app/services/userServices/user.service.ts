import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ClientsProduct } from 'src/app/models/ClientsProducts.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllProductByClient(idClient): Observable<ClientsProduct> {
    return this.http.get<ClientsProduct>(`${environment.services.user.getAllProductByClient}/${idClient}`);
  }

  getDetailProduct(numberAccount): Observable<ClientsProduct> {
    return this.http.get<ClientsProduct>(`${environment.services.user.getDetailProduct}/${numberAccount}`);
  }

  createProduct(newProduct) {
    return this.http.post(environment.services.user.createProduct, newProduct);
  }
}
