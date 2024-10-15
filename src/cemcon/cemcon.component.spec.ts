import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CemconComponent } from './cemcon.component';

describe('CemconComponent', () => {
  let component: CemconComponent;
  let fixture: ComponentFixture<CemconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CemconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CemconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
