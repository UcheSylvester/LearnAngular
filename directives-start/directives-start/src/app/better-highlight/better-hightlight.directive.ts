import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHightlight]"
})
export class BetterHightlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "red";

  @HostBinding("style.backgroundColor") backgroundColor: string;

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "red"
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "red"
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "white"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
