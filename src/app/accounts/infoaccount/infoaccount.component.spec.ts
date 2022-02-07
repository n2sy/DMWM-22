import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoaccountComponent } from './infoaccount.component';

describe('InfoaccountComponent', () => {
  let component: InfoaccountComponent;
  let fixture: ComponentFixture<InfoaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
