import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxComponent } from './ajax.component';

describe('AjaxComponent', () => {
  let component: AjaxComponent;
  let fixture: ComponentFixture<AjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
