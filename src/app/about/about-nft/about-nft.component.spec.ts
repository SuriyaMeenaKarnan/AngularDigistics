import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNftComponent } from './about-nft.component';

describe('AboutNftComponent', () => {
  let component: AboutNftComponent;
  let fixture: ComponentFixture<AboutNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
