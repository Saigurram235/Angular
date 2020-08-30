import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sai1Component } from './sai1.component';

describe('Sai1Component', () => {
  let component: Sai1Component;
  let fixture: ComponentFixture<Sai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
