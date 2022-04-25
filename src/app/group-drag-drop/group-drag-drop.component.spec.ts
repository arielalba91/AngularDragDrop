import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDragDropComponent } from './group-drag-drop.component';

describe('GroupDragDropComponent', () => {
  let component: GroupDragDropComponent;
  let fixture: ComponentFixture<GroupDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
