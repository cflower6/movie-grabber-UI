import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGrabberComponent } from './movie-grabber.component';

describe('MovieGrabberComponent', () => {
  let component: MovieGrabberComponent;
  let fixture: ComponentFixture<MovieGrabberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieGrabberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieGrabberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
