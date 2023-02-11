import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-articulos-vista',
  templateUrl: './articulos-vista.component.html',
  styleUrls: ['./articulos-vista.component.css']
})
export class ArticulosVistaComponent implements OnInit {

  id: string;
  constructor(private articuloService: ArticulosService, private fb: FormBuilder, private router: Router, private activedRoute: ActivatedRoute, private carritoService: CarritoService) {

  }

  resp;
  showButton = false;
  expression: boolean = false;
  ngOnInit(): void {
    this.showButton = false;
    if (localStorage.getItem('tipo_usuario') == '3') {
      console.log(localStorage.getItem('tipo_usuario'));
      this.showButton = true;
    }
    this.id = this.router.url.slice(10);
    this.articuloService.getArticulo(this.id).subscribe((res: any) => {
      this.resp = res;
      console.log(this.resp);
      this.expression = true;
    })
  }

  add() {
    const info = {
      id_carrito: Number(localStorage.getItem('id_carrito')),
      id_articulo: this.resp.id_articulo,
      total: this.resp.precio
    }
    console.log(info);
    this.carritoService.insertArticulo(info).subscribe((res: any) => {
      window.alert(res.message);
    });
  }
}
