import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCharacterComponent } from './description-character.component';

describe('DescriptionCharacterComponent', () => {
  let component: DescriptionCharacterComponent;
  let fixture: ComponentFixture<DescriptionCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
