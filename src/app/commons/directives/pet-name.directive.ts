import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true,
})
export class CapitalizeDirective implements OnInit {
  #el = inject(ElementRef);

  ngOnInit(): void {
    this.#el.nativeElement.style.textTransform = 'capitalize';
  }
}
