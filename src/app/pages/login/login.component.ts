import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit() {

    let { username, password } = this.form.value

    if (username == 'RafaelCm89' && password == '123456') {
      this.router.navigate(['/dashboard'])
      localStorage.setItem('token', 'RafaelCm89')
    } else {
      alert('Datos incorrectos')
    }

    console.log(this.form.value)
  }

}
