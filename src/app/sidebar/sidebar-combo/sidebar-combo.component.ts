import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-combo',
  templateUrl: './sidebar-combo.component.html',
  styleUrls: ['./sidebar-combo.component.css']
})
export class SidebarComboComponent implements OnInit {
  @Input() items:any[];
  @Input() mainTitle:string;
  @Input() icon:string;

  @ViewChild("dropContainer") dropC:any;

  constructor() { }

  ngOnInit(): void {
  }

  triggerDrop(){
    let dropC:any = document.querySelectorAll(".dropdown-container");

    let status = this.dropC.nativeElement.style.display;
    if(status===""){
      this.dropC.nativeElement.style.display = "block"
    }else{
      this.dropC.nativeElement.style.display = ""
    }
  }
}
