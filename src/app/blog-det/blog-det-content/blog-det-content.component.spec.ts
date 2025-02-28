import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetContentComponent } from './blog-det-content.component';

describe('BlogDetContentComponent', () => {
  let component: BlogDetContentComponent;
  let fixture: ComponentFixture<BlogDetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
