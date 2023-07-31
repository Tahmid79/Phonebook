import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsNewComponent } from './contact-details-new.component';

describe('ContactDetailsNewComponent', () => {
  let component: ContactDetailsNewComponent;
  let fixture: ComponentFixture<ContactDetailsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
