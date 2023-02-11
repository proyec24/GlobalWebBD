import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {
  form: FormGroup;
  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('id_usuario')) {
      this.router.navigateByUrl('home');
    }
  }
  get f() {
    return this.form.controls;
  }
  login() {
    this.loginService.loginUsuario(this.form.value).subscribe((res: any) => {
      if (res.message == 'Usuario o contrasena incorrectos') {
        window.alert('El correo o la contraseña son incorrectos');
      } else {
        console.log(res);
        this.loginService.numero = 1;
        localStorage.setItem('tipo_usuario', res.id_tipo_usuario);
        localStorage.setItem('id_usuario', res.id);
        window.location.reload();
      }
    })
  }
}
