import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymaentCardComponent } from './paymaent-card.component';

describe('PaymaentCardComponent', () => {
  let component: PaymaentCardComponent;
  let fixture: ComponentFixture<PaymaentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymaentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymaentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
