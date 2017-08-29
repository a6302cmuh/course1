import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolatComponent } from './geolat.component';

describe('GeolatComponent', () => {
  let component: GeolatComponent;
  let fixture: ComponentFixture<GeolatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
