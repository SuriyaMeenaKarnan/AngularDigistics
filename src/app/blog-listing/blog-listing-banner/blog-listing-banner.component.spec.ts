import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListingBannerComponent } from './blog-listing-banner.component';

describe('BlogListingBannerComponent', () => {
  let component: BlogListingBannerComponent;
  let fixture: ComponentFixture<BlogListingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
