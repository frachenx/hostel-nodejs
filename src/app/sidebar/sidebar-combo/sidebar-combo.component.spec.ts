import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComboComponent } from './sidebar-combo.component';

describe('SidebarComboComponent', () => {
  let component: SidebarComboComponent;
  let fixture: ComponentFixture<SidebarComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
