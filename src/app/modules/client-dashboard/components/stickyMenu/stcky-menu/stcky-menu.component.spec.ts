import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StckyMenuComponent } from './stcky-menu.component';

describe('StckyMenuComponent', () => {
  let component: StckyMenuComponent;
  let fixture: ComponentFixture<StckyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StckyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StckyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
