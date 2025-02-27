import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDocenteComponent } from './consulta-docente.component';

describe('ConsultaDocenteComponent', () => {
  let component: ConsultaDocenteComponent;
  let fixture: ComponentFixture<ConsultaDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
