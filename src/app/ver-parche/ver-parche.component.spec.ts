import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerParcheComponent } from './ver-parche.component';

describe('VerParcheComponent', () => {
  let component: VerParcheComponent;
  let fixture: ComponentFixture<VerParcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerParcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerParcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
