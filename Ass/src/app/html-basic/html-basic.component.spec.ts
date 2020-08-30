import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBasicComponent } from './html-basic.component';

describe('HtmlBasicComponent', () => {
  let component: HtmlBasicComponent;
  let fixture: ComponentFixture<HtmlBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
