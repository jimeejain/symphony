import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortListsComponent } from './short-lists.component';

describe('ShortListsComponent', () => {
  let component: ShortListsComponent;
  let fixture: ComponentFixture<ShortListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
