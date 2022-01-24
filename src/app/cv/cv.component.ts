import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  p = new Candidat(1, 'Nidhal', 'Jelassi', 38, 'Enseignant');
  p1 = new Candidat(1, 'Nidhal', 'Jelassi', 38, 'Enseignant', 'nidhal.jpg');
  constructor() {}

  ngOnInit(): void {}
}
