import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private _refreshButton: HTMLAnchorElement;

  constructor() {
  }
  
  ngOnInit(): void {
    this._refreshButton = document.querySelector('#btn__refresh');
    this._refreshButton.addEventListener("click", this.refreshPage);
  }

  refreshPage(event: Event): void {
    event.preventDefault();
    document.location.reload();
  }

}
