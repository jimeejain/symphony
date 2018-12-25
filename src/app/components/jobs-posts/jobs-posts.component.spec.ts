import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPostsComponent } from './jobs-posts.component';

describe('JobsPostsComponent', () => {
  let component: JobsPostsComponent;
  let fixture: ComponentFixture<JobsPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
