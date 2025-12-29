import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-schedule',
  imports: [],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

catalog = viewChild<ElementRef<HTMLDivElement>>('catalog');


  jumpToCatalog() {
    this.catalog()?.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
