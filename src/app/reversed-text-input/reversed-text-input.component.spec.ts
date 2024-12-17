import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversedTextInputComponent } from './reversed-text-input.component';

describe('ReversedTextInputComponent', () => {
  let component: ReversedTextInputComponent;
  let fixture: ComponentFixture<ReversedTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReversedTextInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversedTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
