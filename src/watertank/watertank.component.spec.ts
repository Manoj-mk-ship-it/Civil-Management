import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertankComponent } from './watertank.component';

describe('WatertankComponent', () => {
  let component: WatertankComponent;
  let fixture: ComponentFixture<WatertankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatertankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatertankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
