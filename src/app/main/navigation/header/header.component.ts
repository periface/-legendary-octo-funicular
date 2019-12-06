import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  selector: "app-header"
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
