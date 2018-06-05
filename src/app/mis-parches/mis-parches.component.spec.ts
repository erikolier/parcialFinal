import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisParchesComponent } from './mis-parches.component';

describe('MisParchesComponent', () => {
  let component: MisParchesComponent;
  let fixture: ComponentFixture<MisParchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisParchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisParchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
