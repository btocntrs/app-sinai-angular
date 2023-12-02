import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProveedoresComponent } from './formulario-proveedores.component';

describe('FormularioProveedoresComponent', () => {
  let component: FormularioProveedoresComponent;
  let fixture: ComponentFixture<FormularioProveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioProveedoresComponent]
    });
    fixture = TestBed.createComponent(FormularioProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
