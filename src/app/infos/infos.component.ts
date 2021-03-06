import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  //id: any;
  selectedCandidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    //V1
    // this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);

    //V2
    // this.activatedRoute.params.subscribe({
    //   next: (p: Params) => {
    //     this.id = p['id'];
    //     console.log(p['id']);
    //   },
    // });

    //V3
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        //this.id = p.get('id');
        //console.log(this.id);
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.selectedCandidat = response;
          },
        });
      },
    });
  }

  deleteCandidat() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.selectedCandidat['_id']).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log('erreur avec deleteCandidat');
        },
      });
    }
  }
}
