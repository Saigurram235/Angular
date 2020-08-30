import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapIntroductionComponent } from './bootstrap-introduction.component';

describe('BootstrapIntroductionComponent', () => {
  let component: BootstrapIntroductionComponent;
  let fixture: ComponentFixture<BootstrapIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
