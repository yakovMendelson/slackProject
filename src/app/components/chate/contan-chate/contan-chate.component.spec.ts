import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContanChateComponent } from './contan-chate.component';

describe('ContanChateComponent', () => {
  let component: ContanChateComponent;
  let fixture: ComponentFixture<ContanChateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContanChateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContanChateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
