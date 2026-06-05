import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coaching } from './coaching';

describe('Coaching', () => {
  let component: Coaching;
  let fixture: ComponentFixture<Coaching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coaching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coaching);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
