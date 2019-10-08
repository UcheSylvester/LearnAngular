import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  users = [
    {
      id: 1,
      name: "Max"
    },
    {
      id: 2,
      name: "Anna"
    },
    {
      id: 3,
      name: "Chris"
    }
  ];

  reloadPage() {
    this.router.navigate(["/users"], { relativeTo: this.route });
    console.log("reloading...");
  }
}
