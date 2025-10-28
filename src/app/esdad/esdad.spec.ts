import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esdad } from './esdad';

describe('Esdad', () => {
  let component: Esdad;
  let fixture: ComponentFixture<Esdad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esdad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esdad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
