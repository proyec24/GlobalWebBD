import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-clientes',
  templateUrl: './register-clientes.component.html',
  styleUrls: ['./register-clientes.component.css']
})
export class RegisterClientesComponent implements OnInit {
  form: FormGroup;
  constructor(private registerService: LoginService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      contrasena: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required, Validators.email]],
      apellido_materno: ['', [Validators.required]],
      apellido_paterno: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      no_exterior: ['', [Validators.required]],
      colonia: ['', [Validators.required]],
      cp: ['', [Validators.required]]
    })
  }
  modelos = [];
  marcas = [];
  tallas = [];

  ngOnInit(): void {
  }
  get f() {
    return this.form.controls;
  }


  confirmar() {
    console.log(this.form.value);
    this.registerService.register(this.form.value).subscribe((res: any) => {
      window.alert(res.message);
      this.router.navigateByUrl('home');
    });
  }

}
