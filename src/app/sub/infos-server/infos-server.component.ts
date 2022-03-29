import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServeursService } from '../serveurs.service';

@Component({
  selector: 'app-infos-server',
  templateUrl: './infos-server.component.html',
  styleUrls: ['./infos-server.component.css'],
})
export class InfosServerComponent implements OnInit {
  selectedServeur;
  hd = true;

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

    this.activatedRoute.queryParamMap.subscribe({
      next: (q) => {
        this.hd = q.get('allow') == '1' ? false : true;
      },
    });
  }
}
