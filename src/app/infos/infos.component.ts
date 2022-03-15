import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  id: any;
  constructor(private activatedRoute: ActivatedRoute) {}

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
        this.id = p.get('id');
        console.log(this.id);
      },
    });
  }
}
