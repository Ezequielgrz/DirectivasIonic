import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaDirectoriosPage } from './prueba-directorios.page';

describe('PruebaDirectoriosPage', () => {
  let component: PruebaDirectoriosPage;
  let fixture: ComponentFixture<PruebaDirectoriosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruebaDirectoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
