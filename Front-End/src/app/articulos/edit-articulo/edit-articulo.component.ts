import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-edit-articulo',
  templateUrl: './edit-articulo.component.html',
  styleUrls: ['./edit-articulo.component.css']
})
export class EditArticuloComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(private articuloService: ArticulosService, private fb: FormBuilder, private router: Router, private activedRoute: ActivatedRoute) {

    this.form = this.fb.group({
      id_modelo: ['', [Validators.required]],
      id_marca: ['', [Validators.required]],
      id_talla: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      precio: ['', [Validators.required]],
    })
  }
  modelos = [];
  marcas = [];
  tallas = [];
  resp;
  expression: boolean = false;
  ngOnInit(): void {
    this.articuloService.getTallas().subscribe((pos: any) => {
      this.tallas = pos;
      console.log(this.tallas);
    });
    this.articuloService.getMarcas().subscribe((pos: any) => {
      this.marcas = pos;
    });
    this.articuloService.getModelos().subscribe((pos: any) => {
      this.modelos = pos;
    });

    this.id = this.router.url.slice(12);
    this.articuloService.getArticulo(this.id).subscribe((res: any) => {
      this.resp = res;
      console.log(this.resp);
      this.expression = true;
    })
  }
  get f() {
    return this.form.controls;
  }


  confirmar() {
    console.log(this.form.value);
    this.articuloService.updateArticulo(this.id, this.form.value).subscribe((res: any) => {
      window.alert(res.message);
      this.router.navigateByUrl('home');
    });
  }
}