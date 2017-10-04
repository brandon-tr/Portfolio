import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { BlogService } from '../models/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registers = new Register();
  check: string;
  validate;
  constructor(private _register: BlogService, private _router: Router) { }

  ngOnInit() {
    while (this.validate === undefined) {
      this.validate = prompt('Please enter the access code to register');
    }
    this._register.ValidateRegister(this.validate)
    .then(data => {
      if (data === false) {
        this._router.navigateByUrl('/blog');
      }
    });
  }

  Register(register) {
    this._register.Register(this.registers)
      .then(data => {
        this.check = data;
        console.log(data);
      });
     register.resetForm();
     this.registers = new Register();
   }
}
