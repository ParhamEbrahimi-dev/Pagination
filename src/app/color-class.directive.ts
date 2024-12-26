import { Directive,ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorClass]'
})
export class ColorClassDirective {
  @HostBinding("style.backgroundColor") backgroundColor : string="transparent"

  constructor(private elementRef : ElementRef ) 
  {
    //console.log(this.elementRef)
   // this.elementRef.nativeElement.style.backgroundColor='white';

  }
  @HostListener("mouseenter") onMouseEnter(){
    this.backgroundColor="Red";
  }
  @HostListener("mouseleave") onMouseLeave()
  {
    this.backgroundColor="yellow";
  }

}
