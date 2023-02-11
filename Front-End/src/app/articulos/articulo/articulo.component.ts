import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor(private articulos: ArticulosService, private router: Router) { }
  articulosArray: any = [];
  admin: boolean = false;
  ngOnInit(): void {
    if (localStorage.getItem('tipo_usuario') == "1") {
      this.admin = true;
      console.log('true');
    }
    this.articulos.getArticulos().subscribe((res: any) => {
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
  go(id) {
    this.router.navigateByUrl('articulo/' + id);
  }
  delete(id) {
    console.log(id);
    const articulo = {
      id_articulo: id
    }
    this.articulos.deleteArticulo(id).subscribe((res: any) => {
      window.alert(res.message);
      window.location.reload();
    });

  }
  update(id) {
    this.router.navigateByUrl('actualizar/' + id);
  }
}
