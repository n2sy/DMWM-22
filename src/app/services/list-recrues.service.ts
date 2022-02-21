import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  tabRecrues: Candidat[] = [];
  constructor() {}

  addNewRecrue(newR) {
    if (this.tabRecrues.indexOf(newR) != -1)
      alert('Cette personne a déjà été recrutée !');
    else this.tabRecrues.push(newR);
  }
}
