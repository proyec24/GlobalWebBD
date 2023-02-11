import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  estatus: any;


  constructor(private articulos: ArticulosService, private router: Router) { }
  articulosArray: any = [];
  admin: boolean = false;
  ngOnInit(): void {
    if (localStorage.getItem('tipo_usuario') == "1") {
      this.admin = true;
      console.log('true');
    }
    this.articulos.getStatus().subscribe((res: any) => {
      this.estatus = res;
      console.log(this.estatus);
    })
    this.articulos.getPedidos().subscribe((res: any) => {
      if (res.message) {
        //
        console.log(this.articulosArray);
      } else {
        this.articulosArray = res;
        console.log(this.articulosArray);
      }

    });
  }
  user = '';

  update(id, estatus) {
    let u = {
      id: id,
      id_estatus: estatus
    }
    console.log(u);
    this.articulos.setStatus(u).subscribe((res: any) => {
      window.alert(res.message);
    });
  }

}
