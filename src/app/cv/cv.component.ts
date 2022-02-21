import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [FirstService],
})
export class CvComponent implements OnInit, AfterViewInit, AfterContentInit {
  selectedCandidat: Candidat;
  tabCandidats: Candidat[] = [];
  @ViewChild('inputName', { static: true }) inpName;
  @ContentChild('paragraphe') parag;

  constructor(
    private firstSer: FirstService,
    private listCand: ListCandidatsService
  ) {
    //console.log('Constructor');
  }
  ngAfterContentInit(): void {
    //console.log(this.parag);
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    this.firstSer.showMsg();
    this.tabCandidats = this.listCand.getAllCandidats();
  }

  addCandidat() {
    this.listCand.addCandidat(
      new Candidat(2, 'New', 'Candidat', 58, 'Plombier', 'homer.jpg')
    );
    console.log(this.listCand.getAllCandidats());
  }

  ngAfterViewInit(): void {
    // console.log('xxxxxx');
    //console.log(this.parag);
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
