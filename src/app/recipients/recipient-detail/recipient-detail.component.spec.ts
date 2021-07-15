import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientDetailComponent } from './recipient-detail.component';

describe('RecipientDetailComponent', () => {
  let component: RecipientDetailComponent;
  let fixture: ComponentFixture<RecipientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
