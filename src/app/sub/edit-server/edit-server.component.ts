import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServeursService } from '../serveurs.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  selectedServeur;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serService: ServeursService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.selectedServeur = this.serService.getServeurById(p.get('id'));
      },
    });
  }
}
