import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    if (localStorage.getItem('id_usuario')) {
      console.log(localStorage.getItem('id_usuario'));
      this.carritoService.verificacion(localStorage.getItem('id_usuario')).subscribe((res: any) => {
        if (res.message == 0) {
          const id = {
            id: Number(localStorage.getItem('id_usuario'))
          };
          this.carritoService.createCarrito(id).subscribe((res: any) => {
            console.log(res.message);
            location.reload();
          });
        } else {
          localStorage.setItem('id_carrito', res.id_carrito);
        }
      });
    }
  }

}
