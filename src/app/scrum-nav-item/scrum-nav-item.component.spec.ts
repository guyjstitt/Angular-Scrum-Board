import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumNavItemComponent } from './scrum-nav-item.component';

describe('ScrumNavItemComponent', () => {
  let component: ScrumNavItemComponent;
  let fixture: ComponentFixture<ScrumNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
