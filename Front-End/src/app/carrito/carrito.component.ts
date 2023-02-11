import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatCardXlImage } from '@angular/material/card';
import { ArticulosService } from '../services/articulos.service';
import { CarritoService } from '../services/carrito.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  email: any;

  constructor(private carrito: CarritoService, private articuloService: ArticulosService, private user: LoginService) { }
  resp;
  total = 0;
  ngOnInit(): void {
    this.user.getUser(localStorage.getItem('id_usuario')).subscribe((res: any) => {
      this.email = res.correo;
    });
    const id_carrito = localStorage.getItem('id_carrito');
    this.carrito.getArticulos(id_carrito).subscribe((res => {
      console.log(res);
      this.resp = res;
      this.expression = true;
      for (let i of this.resp) {
        this.total += i.precio;
      }

    }));

  }
  id: string;

  showButton = false;
  expression: boolean = false;


  delete(id) {
    this.carrito.deleteArticuloCarrito(id).subscribe(((res: any) => {
      window.alert(res.message);
      location.reload();
    }));
  }
  pedido() {
    let articulo;
    let html = `<html><body>`;
    for (let i of this.resp) {
      console.log(i);
      const id_pedido = this.getRandomInt(1234533);
      html += ` <h2>` + i.nombre + `  id: ` + id_pedido + `</h2>
      <img src="`+ i.imagen + `" />
      <ul>
        <li>Modelo:`+ i.modelo + `</li>
        <li>Marca: `+ i.marca + `</li>
        <li>Talla: `+ i.talla + ` cm</li>
        <li>Precio: `+ i.precio + `</li>
      </ul>
      <hr>`;
      i.stock--;
      articulo = {
        id_articulo: i.id_articulo,
        id_usuario: Number(localStorage.getItem('id_usuario')),
        precio_total: i.precio,
        cant_articulos: 1,
        fecha_pedido: Date.now(),
        id_pedido: id_pedido,
        total_articulo: i.precio
      }

      console.log(articulo);
      this.articuloService.updateArticulo(i.id_articulo, i).subscribe((res: any) => {
        this.carrito.createPedido(articulo).subscribe((res: any) => {
          console.log('hola');
          this.carrito.deleteArticuloCarrito(i.id_seleccion).subscribe((res: any) => {
            console.log(res);
            window.alert('vaciando carrito');

          });
        });
      });

      //window.location.reload();
    }
    var d = new Date().toISOString().slice(0, 10);
    html += `
    
    <h1>Total: $`+ this.total + `</h1>
    <h3>Apartir de esta fecha puedes recoger tu pedido `+ d + ` </h3>
    </body></html>`;
    let correo = {
      html: html,
      mensaje: "hola",
      asunto: "Recibo",
      email: this.email
    }
    this.carrito.correo(correo).subscribe((res: any) => {
      window.alert('Checa tu correo electronico');
    })
    this.resp = [];
    this.total = 0;
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
