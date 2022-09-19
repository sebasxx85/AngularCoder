import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusizqComponent } from './menusizq.component';

describe('MenusizqComponent', () => {
  let component: MenusizqComponent;
  let fixture: ComponentFixture<MenusizqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusizqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusizqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
