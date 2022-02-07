import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css'],
})
export class AddaccountComponent implements OnInit {
  listStatus = ['', 'active', 'inactive', 'unknown'];
  @Output() msgToHome = new EventEmitter();
  // @Output() msgToHome = new EventEmitter<{ name: string; status: string }>();
  constructor() {}

  ngOnInit(): void {}

  ajouterAccount(nameSelected, statusSelected) {
    this.msgToHome.emit({ name: nameSelected, status: statusSelected });
  }
}
