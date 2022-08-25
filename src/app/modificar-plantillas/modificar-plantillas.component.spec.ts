import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPlantillasComponent } from './modificar-plantillas.component';

describe('ModificarPlantillasComponent', () => {
  let component: ModificarPlantillasComponent;
  let fixture: ComponentFixture<ModificarPlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPlantillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
