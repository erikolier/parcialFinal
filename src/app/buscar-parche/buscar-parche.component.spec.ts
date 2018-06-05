import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarParcheComponent } from './buscar-parche.component';

describe('BuscarParcheComponent', () => {
  let component: BuscarParcheComponent;
  let fixture: ComponentFixture<BuscarParcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarParcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarParcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
