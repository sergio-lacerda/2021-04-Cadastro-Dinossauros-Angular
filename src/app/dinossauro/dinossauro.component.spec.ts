import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinossauroComponent } from './dinossauro.component';

describe('DinossauroComponent', () => {
  let component: DinossauroComponent;
  let fixture: ComponentFixture<DinossauroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinossauroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinossauroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
