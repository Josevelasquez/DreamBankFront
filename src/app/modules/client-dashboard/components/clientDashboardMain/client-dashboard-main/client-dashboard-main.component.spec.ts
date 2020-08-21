import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboardMainComponent } from './client-dashboard-main.component';

describe('ClientDashboardMainComponent', () => {
  let component: ClientDashboardMainComponent;
  let fixture: ComponentFixture<ClientDashboardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDashboardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
