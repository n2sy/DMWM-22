import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosServerComponent } from './infos-server.component';

describe('InfosServerComponent', () => {
  let component: InfosServerComponent;
  let fixture: ComponentFixture<InfosServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
