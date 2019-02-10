import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pass :string;
  myUsername:string;

   testdemo3(){
   if(this.pass=="vaishu" && this.myUsername=="vaishu123"){
     alert("Hi vaishu");
   }
   else{
     alert("fuck off");
   }

   }

  
  title = 'demo3';
}
