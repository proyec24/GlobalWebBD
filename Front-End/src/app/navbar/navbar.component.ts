import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowToggle } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public loginService: LoginService) { }
  number = 0;
  ngOnInit(): void {
    this.number = Number(localStorage.getItem('tipo_usuario'));
    switch (this.number) {
      case 1:
        console.log('Administrador');
        break;
      case 2:
        console.log('Empleado');
        break;
      case 3:
        console.log('cliente');
        break;
      default:
        this.number = 0;
        console.log('nadie');
        break;
    }
  }
  logOut() {
    localStorage.removeItem('id_usuario');
    localStorage.removeItem('tipo_usuario');
    this.number = 5;
    this.router.navigateByUrl('login');
  }
}
