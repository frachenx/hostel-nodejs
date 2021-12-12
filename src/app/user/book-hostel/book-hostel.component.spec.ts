import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHostelComponent } from './book-hostel.component';

describe('BookHostelComponent', () => {
  let component: BookHostelComponent;
  let fixture: ComponentFixture<BookHostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookHostelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
