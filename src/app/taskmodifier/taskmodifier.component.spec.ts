import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmodifierComponent } from './taskmodifier.component';

describe('TaskmodifierComponent', () => {
  let component: TaskmodifierComponent;
  let fixture: ComponentFixture<TaskmodifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskmodifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskmodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
