import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cdk.Drag.SampleComponent } from './cdk.drag.sample.component';

describe('Cdk.Drag.SampleComponent', () => {
  let component: Cdk.Drag.SampleComponent;
  let fixture: ComponentFixture<Cdk.Drag.SampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cdk.Drag.SampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cdk.Drag.SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
