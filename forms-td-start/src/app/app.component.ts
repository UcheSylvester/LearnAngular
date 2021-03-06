import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  answer: string = "";
  
  @ViewChild("form") signupForm: NgForm;
  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // onSubmit(form: NgForm) {
  //   console.log("submitted");
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
