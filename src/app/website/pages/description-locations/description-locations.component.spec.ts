import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionLocationsComponent } from './description-locations.component';

describe('DescriptionLocationsComponent', () => {
  let component: DescriptionLocationsComponent;
  let fixture: ComponentFixture<DescriptionLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
