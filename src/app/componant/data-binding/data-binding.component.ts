import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string, number, boolean, date
   coursename: string ="Angular 18";
   inputType = "checkbox";
   statename: string="";
   inputType1 ="radio";
   rollno: number = 123;
   myClassName: String = "bg-primary";
   isIndian: boolean = true;
   currentDate: Date = new Date(); 

   firstName=  signal("Pranoj Gonjari");

   constructor(){
  
   }

   changeCourseName(){
      this.coursename="React JS";
      this.firstName.set("MS Dhoni..");
   }

   showAlert(message: string){
    alert(message)
   }
}
