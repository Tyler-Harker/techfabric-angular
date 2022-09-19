import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'tf-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() headerText: string = 'Header';
  @Input() displayPreview: boolean = false;
  @Input() hasPrimaryBanner: boolean = false;
  @Input() isSelectable: boolean = false;
  @Input() isSelected: boolean = false;
  @Output() isSelectedChange = new EventEmitter<boolean>();

  @ViewChild(`content`) contentElement : any = null;
  constructor() { 
  }

  ngOnInit() {
  }

  get expandedIcon(): any {
    return this.isOpen ? faMinus : faPlus;
  }
  

  toggle(){
    this.isOpen = !this.isOpen;
    if(this.isSelectable){
      this.isSelected = this.isOpen;
    }
  }
  
  getContentMaxHeight(){
    let maxHeight = 0;
    try{
      let children  = [...this.contentElement?.nativeElement.children];
      for(let elem of children){
        maxHeight += elem.clientHeight;
      }
    }
    catch(ex){

    }
    return maxHeight;
  }
}
