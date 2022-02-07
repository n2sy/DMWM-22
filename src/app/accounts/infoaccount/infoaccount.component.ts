import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infoaccount',
  templateUrl: './infoaccount.component.html',
  styleUrls: ['./infoaccount.component.css'],
})
export class InfoaccountComponent implements OnInit {
  @Input() accSelected;
  constructor() {}

  ngOnInit(): void {}

  setTo(newStatus) {
    this.accSelected.status = newStatus;
  }
}
