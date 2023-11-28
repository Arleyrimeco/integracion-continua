import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private UserService: UserService,
    private router: Router
  ) { 
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.UserService.register(this.formReg.value)
     .then((response) => {
      console.log('respuesta', response);
      this.router.navigate(['/login']);
     })
     .catch(error => console.log(error))
  }
  
}
