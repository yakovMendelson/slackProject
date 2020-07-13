import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateComponent } from './chate.component';

describe('ChateComponent', () => {
  let component: ChateComponent;
  let fixture: ComponentFixture<ChateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
