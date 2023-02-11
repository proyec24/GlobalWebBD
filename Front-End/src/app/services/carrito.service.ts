import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  url: string = 'http://localhost:4000/carrito';
  url2: string = 'http://localhost:4000/articulo-carrito';
  url3: string = 'http://localhost:4000/pedido';
  url4: string = 'http://localhost:4000/correo';
  constructor(private http: HttpClient) { }

  verificacion(id: any) {
    return this.http.get(this.url + "/" + id);
  }
  createCarrito(id: any) {
    return this.http.post(this.url, id);
  }
  insertArticulo(articulo: any) {
    return this.http.post(this.url2, articulo);
  }
  getArticulos(id: any) {
    return this.http.get(this.url2 + '/' + id);
  }
  deleteArticuloCarrito(id: any) {
    return this.http.delete(this.url2 + '/' + id);
  }
  createPedido(articulo: any) {
    return this.http.post(this.url3, articulo)
  }
  vaciarCarrito(id: any) {
    return this.http.delete(this.url2 + '/' + id);
  }
  correo(doc) {
    return this.http.post(this.url4, doc);
  }
}
