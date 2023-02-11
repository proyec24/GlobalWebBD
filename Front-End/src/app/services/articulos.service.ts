import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url = 'http://localhost:4000/'
  constructor(private http: HttpClient) { }
  getArticulo(id) {
    return this.http.get(this.url + 'articulo/' + id);
  }
  getArticulos() {
    return this.http.get(this.url + 'articulos');
  }
  getTallas() {
    return this.http.get(this.url + 'tallas');
  }
  getMarcas() {
    return this.http.get(this.url + 'marcas');
  }
  getModelos() {
    return this.http.get(this.url + 'modelos');
  }
  postArticulo(articulo: any) {
    return this.http.post(this.url + 'articulo', articulo);
  }
  deleteArticulo(id: any) {
    console.log(id);
    return this.http.delete(this.url + 'articulo/' + id);
  }
  updateArticulo(id: any, articulo: any) {
    console.log(id);
    return this.http.put(this.url + 'articulo/empleado/' + id, articulo);
  }
  getPedidos() {
    return this.http.get(this.url + 'pedidos');
  }
  getStatus() {
    return this.http.get(this.url + 'estatus');
  }
  setStatus(id: any) {
    return this.http.put(this.url + 'estatus/' + id.id, id);
  }
}
