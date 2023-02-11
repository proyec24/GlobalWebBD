import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-register-articulo',
  templateUrl: './register-articulo.component.html',
  styleUrls: ['./register-articulo.component.css']
})
export class RegisterArticuloComponent implements OnInit {
  form: FormGroup;
  constructor(private articuloService: ArticulosService, private fb: FormBuilder, private router: Router) {
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
  }
  get f() {
    return this.form.controls;
  }


  confirmar() {
    console.log(this.form.value);
    this.articuloService.postArticulo(this.form.value).subscribe((res: any) => {
      window.alert(res.message);
      this.router.navigateByUrl('home');
    });
  }

}
