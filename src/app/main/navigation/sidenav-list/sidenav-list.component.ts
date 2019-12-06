import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
  selector:'app-sidenav-list'
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
