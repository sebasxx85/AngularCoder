import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacontenidoComponent } from './areacontenido.component';

describe('AreacontenidoComponent', () => {
  let component: AreacontenidoComponent;
  let fixture: ComponentFixture<AreacontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreacontenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreacontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
