import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailProductComponent } from './client-detail-product.component';

describe('ClientDetailProductComponent', () => {
  let component: ClientDetailProductComponent;
  let fixture: ComponentFixture<ClientDetailProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
