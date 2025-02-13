import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateComponent } from './angular-template.component';

describe('AngularTemplateComponent', () => {
  let component: AngularTemplateComponent;
  let fixture: ComponentFixture<AngularTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
