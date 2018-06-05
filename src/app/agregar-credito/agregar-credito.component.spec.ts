import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCreditoComponent } from './agregar-credito.component';

describe('AgregarCreditoComponent', () => {
  let component: AgregarCreditoComponent;
  let fixture: ComponentFixture<AgregarCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
