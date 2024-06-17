import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @Input() appHighlight: string = "";
    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = this.appHighlight || "yellow"
    }

    constructor(private el: ElementRef) { }

    
    
}