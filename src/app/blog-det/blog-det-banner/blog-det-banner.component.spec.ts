import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetBannerComponent } from './blog-det-banner.component';

describe('BlogDetBannerComponent', () => {
  let component: BlogDetBannerComponent;
  let fixture: ComponentFixture<BlogDetBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
