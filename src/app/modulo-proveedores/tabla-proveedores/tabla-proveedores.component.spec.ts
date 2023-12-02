import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProveedoresComponent } from './tabla-proveedores.component';

describe('TablaProveedoresComponent', () => {
  let component: TablaProveedoresComponent;
  let fixture: ComponentFixture<TablaProveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaProveedoresComponent]
    });
    fixture = TestBed.createComponent(TablaProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
