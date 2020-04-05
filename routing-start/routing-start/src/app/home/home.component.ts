import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  loadServer(id: number) {
    this.router.navigate(["/servers", id, "edit"], {
      queryParams: { allowEdit: 1 },
      fragment: "loading"
    });
  }

  login() {
    this.authService.login();
    console.log(this.authService.loggedIn);
  }

  logout() {
    this.authService.logOut();
    console.log(this.authService.loggedIn);
  }
}