import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppoinmentNewsletterComponent } from './form-appoinment-newsletter.component';

describe('FormAppoinmentNewsletterComponent', () => {
  let component: FormAppoinmentNewsletterComponent;
  let fixture: ComponentFixture<FormAppoinmentNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAppoinmentNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAppoinmentNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
