import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appBetterHightlight]"
})
export class BetterHightlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "red"
    // );
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "red"
    // );
    this.backgroundColor = "red";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "white"
    // );
    this.backgroundColor = "transparent";
  }
}
