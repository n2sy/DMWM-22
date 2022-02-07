import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit, AfterViewInit, AfterContentInit {
  selectedCandidat: Candidat;
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Nidhal', 'Jelassi', 38, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'Homer', 'Simpson', 58, 'Plombier', 'homer.jpg'),
    new Candidat(3, 'Bart', 'Simpson', 38, 'Eleve', 'bart.jpeg'),
    new Candidat(1, 'Nidhal', 'Jelassi', 38, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'Homer', 'Simpson', 58, 'Plombier', 'homer.jpg'),
    new Candidat(3, 'Bart', 'Simpson', 38, 'Eleve', 'bart.jpeg'),
  ];
  @ViewChild('inputName', { static: true }) inpName;
  @ContentChild('paragraphe') parag;

  constructor() {
    //console.log('Constructor');
  }
  ngAfterContentInit(): void {
    console.log(this.parag);
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    console.log(this.parag);
  }

  ngAfterViewInit(): void {
    console.log('xxxxxx');

    console.log(this.parag);
  }

  sendToDetails(myCandidat) {
    this.selectedCandidat = myCandidat;
  }

  checkButton(inp) {
    //console.log(inp);
    console.log(this.inpName);
    this.inpName.nativeElement.value = 'oussema';
    // console.log(this.parag.nativeElement.textContent);
  }
}
