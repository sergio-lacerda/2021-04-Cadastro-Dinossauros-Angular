import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinossauroListaComponent } from './dinossauro-lista.component';

describe('DinossauroListaComponent', () => {
  let component: DinossauroListaComponent;
  let fixture: ComponentFixture<DinossauroListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinossauroListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinossauroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
