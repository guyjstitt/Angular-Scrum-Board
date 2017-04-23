import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumTaskComponent } from './scrum-task.component';

describe('ScrumTaskComponent', () => {
  let component: ScrumTaskComponent;
  let fixture: ComponentFixture<ScrumTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
