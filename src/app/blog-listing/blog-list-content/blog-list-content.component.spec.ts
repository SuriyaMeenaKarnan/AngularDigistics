import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListContentComponent } from './blog-list-content.component';

describe('BlogListContentComponent', () => {
  let component: BlogListContentComponent;
  let fixture: ComponentFixture<BlogListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
