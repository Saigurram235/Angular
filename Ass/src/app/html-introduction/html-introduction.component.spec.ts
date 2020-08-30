import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIntroductionComponent } from './html-introduction.component';

describe('HtmlIntroductionComponent', () => {
  let component: HtmlIntroductionComponent;
  let fixture: ComponentFixture<HtmlIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
