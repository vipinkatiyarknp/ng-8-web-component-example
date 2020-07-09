import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WWidgetComponent } from './w-widget.component';

describe('WWidgetComponent', () => {
  let component: WWidgetComponent;
  let fixture: ComponentFixture<WWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
