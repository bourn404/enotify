import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientStartComponent } from './recipient-start.component';

describe('RecipientStartComponent', () => {
  let component: RecipientStartComponent;
  let fixture: ComponentFixture<RecipientStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
