import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinossauroCadastroComponent } from './dinossauro-cadastro.component';

describe('DinossauroCadastroComponent', () => {
  let component: DinossauroCadastroComponent;
  let fixture: ComponentFixture<DinossauroCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinossauroCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinossauroCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
