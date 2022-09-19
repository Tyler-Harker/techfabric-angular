import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() hasTopBar: boolean = false;

  @ViewChild('header') header: any = null;
  @ViewChild('well') well: any = null;
  @ViewChild('content') content: any = null;
  @ViewChild('footer') footer: any = null;
  constructor() { }

  shouldDisplayHeader(): boolean {
    return this.doesElementHaveContent(this.header);
  }
  shouldDisplayWell(): boolean {
    return this.doesElementHaveContent(this.well);
  }
  shouldDisplayContent(): boolean {
    return this.doesElementHaveContent(this.content);
  }
  shouldDisplayFooter(): boolean {
    return this.doesElementHaveContent(this.footer);
  }

  private doesElementHaveContent(element: any): boolean{
    try{
      return element.nativeElement.children.length > 0 || element.nativeElement.innerText != "";
    }
    catch(ex){
      return false;
    }
  }
  
}
