import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistosComponent } from './registos.component';

describe('RegistosComponent', () => {
  let component: RegistosComponent;
  let fixture: ComponentFixture<RegistosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
