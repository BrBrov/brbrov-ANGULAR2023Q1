import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingBlockComponent } from './sorting-block.component';

describe('SortingBlockComponent', () => {
  let component: SortingBlockComponent;
  let fixture: ComponentFixture<SortingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingBlockComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SortingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
