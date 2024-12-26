import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorClass]'
})
export class ColorClassDirective {

  constructor(private elementRef : ElementRef ) 
  {
    console.log(this.elementRef)
    this.elementRef.nativeElement.style.backgroundColor='white';

  }

}
