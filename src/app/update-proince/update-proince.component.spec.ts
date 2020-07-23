import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProinceComponent } from './update-proince.component';

describe('UpdateProinceComponent', () => {
  let component: UpdateProinceComponent;
  let fixture: ComponentFixture<UpdateProinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
