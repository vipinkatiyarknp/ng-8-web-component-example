import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNotepadComponent } from './widget-notepad.component';

describe('WidgetNotepadComponent', () => {
  let component: WidgetNotepadComponent;
  let fixture: ComponentFixture<WidgetNotepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetNotepadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
