import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableTableComponent } from './resizable-table.component';

describe('ResizableTableComponent', () => {
  let component: ResizableTableComponent;
  let fixture: ComponentFixture<ResizableTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResizableTableComponent]
    });
    fixture = TestBed.createComponent(ResizableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
