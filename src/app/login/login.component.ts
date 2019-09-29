import { Component, OnInit } from "@angular/core";
import { State } from "./login.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  state: State;
  constructor() {
    this.state = new State("login", null);
  }
  // method for the first life cycle event after the constructor where your input variables are initialized
  ngOnInit() {}
}
