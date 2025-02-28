import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string, number, boolean, date
   coursename: string ="Angularb 18";
   inputType = "checkbox";
   rollno: number = 123;
   isIndian: boolean = true;
   currentDate: Date = new Date(); 

   constructor(){
  
   }
}
