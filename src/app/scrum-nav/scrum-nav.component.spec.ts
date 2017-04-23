import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumNavComponent } from './scrum-nav.component';

describe('ScrumNavComponent', () => {
  let component: ScrumNavComponent;
  let fixture: ComponentFixture<ScrumNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
