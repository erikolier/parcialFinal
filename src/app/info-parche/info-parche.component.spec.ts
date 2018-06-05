import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoParcheComponent } from './info-parche.component';

describe('InfoParcheComponent', () => {
  let component: InfoParcheComponent;
  let fixture: ComponentFixture<InfoParcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoParcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoParcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
