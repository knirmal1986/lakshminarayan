import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector: '[ttToggle]',
  })
export class ttToggleDirective{
    private elementSelected = false;

    constructor(private el: ElementRef) {
    }

    @HostListener('click')
    private onClick() {
        this.elementSelected = !this.elementSelected; 
        if(this.elementSelected){
            this.el.nativeElement.classList.add('toggle')
        }else{
            this.el.nativeElement.classList.remove('toggle')
        }
    }
}