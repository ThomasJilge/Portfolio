import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSectionAboutMeComponent } from './first-section-about-me.component';

describe('FirstSectionAboutMeComponent', () => {
  let component: FirstSectionAboutMeComponent;
  let fixture: ComponentFixture<FirstSectionAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSectionAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstSectionAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
