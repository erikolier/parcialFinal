import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearParcheComponent } from './crear-parche.component';

describe('CrearParcheComponent', () => {
  let component: CrearParcheComponent;
  let fixture: ComponentFixture<CrearParcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearParcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearParcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
