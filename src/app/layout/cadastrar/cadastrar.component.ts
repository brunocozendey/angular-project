import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class cadastrarComponent implements OnInit {

  //constructor() { }
  constructor(private http: HttpClient,
              private router: Router
    ){
  }

  ngOnInit() {
  }
  
  onCadastrar(nome: string, emprego: string) {
    /*const req = this.http.post('https://reqres.in/api/users', {
      name: nome,
      job: emprego,
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
      */
    console.log(nome);
    this.router.navigate(['/cadastrar']);
  }

}


