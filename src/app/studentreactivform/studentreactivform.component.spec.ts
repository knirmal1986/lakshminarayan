import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreactivformComponent } from './studentreactivform.component';

describe('StudentreactivformComponent', () => {
  let component: StudentreactivformComponent;
  let fixture: ComponentFixture<StudentreactivformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentreactivformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentreactivformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
