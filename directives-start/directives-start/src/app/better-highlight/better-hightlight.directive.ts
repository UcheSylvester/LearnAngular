import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appBetterHightlight]"
})
export class BetterHightlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "background-color",
    //   "red"
    // );
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "red"
    );
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "white"
    );
  }
}
