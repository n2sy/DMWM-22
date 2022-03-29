import { Component, OnInit } from '@angular/core';
import { ServeursService } from '../serveurs.service';

@Component({
  selector: 'app-list-server',
  templateUrl: './list-server.component.html',
  styleUrls: ['./list-server.component.css'],
})
export class ListServerComponent implements OnInit {
  tabServeurs = [];
  constructor(private serService: ServeursService) {}

  ngOnInit(): void {
    this.tabServeurs = this.serService.tabServeurs;
  }
}
