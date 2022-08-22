import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionEpisodesComponent } from './description-episodes.component';

describe('DescriptionEpisodesComponent', () => {
  let component: DescriptionEpisodesComponent;
  let fixture: ComponentFixture<DescriptionEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionEpisodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
