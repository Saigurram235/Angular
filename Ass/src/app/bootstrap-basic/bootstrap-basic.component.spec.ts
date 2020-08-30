import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapBasicComponent } from './bootstrap-basic.component';

describe('BootstrapBasicComponent', () => {
  let component: BootstrapBasicComponent;
  let fixture: ComponentFixture<BootstrapBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
