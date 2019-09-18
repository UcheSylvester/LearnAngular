import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input() element: {
    type: string;
    name: string;
    content: string;
  };



  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called", changes);
  }

  ngDoCheck() {
    console.log("do check changes called");
  }

  ngAfterContentInit() {
    console.log("after content init called!");
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }
}
