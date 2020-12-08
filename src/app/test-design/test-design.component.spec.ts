import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDesignComponent } from './test-design.component';

describe('TestDesignComponent', () => {
  let component: TestDesignComponent;
  let fixture: ComponentFixture<TestDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
