import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDragStart, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() value: number = 0;
  @Input() percentageValue: number = 0;
  @Input() maxValue: number = 100;
  constructor() { }

  @ViewChild('background') backgroundElement: any;
  @ViewChild('circle') circleElement: any;

  private isDragging: boolean = false;
  position: string = 'test';

  onDragMoved($event: CdkDragMove){
    this.percentageValue = ($event.pointerPosition.x - this.backgroundElementPosition.x) / (this.backgroundElementWidth) * 100;
  }

  get backgroundElementPosition(){
    return {x: this.backgroundElement.nativeElement.offsetLeft, y: this.backgroundElement.nativeElement.offsetTop};
  }

  get backgroundElementWidth(){
    return this.backgroundElement.nativeElement.offsetWidth;
  }

  get mousePosition(){
    return {x: (<any>window)?.event?.clientX, y: (<any>window)?.event?.clientY};
  }

  get circlePosition(){
    return {x: this.circleElement.nativeElement.offsetLeft, y: this.circleElement.nativeElement.offsetTop};
  }

  get circleRelativePosition(){
    try{
      let transform = this.circleElement.nativeElement.style.transform.replace('translate3d(', '').replace(')').replace('px', '');
      let transformValues = transform.split(',');
      return {x: parseInt(transformValues[0]), y: parseInt(transformValues[1])};
    }
    catch(ex) {
      return {x: 0, y: 0};
    }
    
    
  }
}
