import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcFooterComponent } from './cc-footer.component';

describe('CcFooterComponent', () => {
  let component: CcFooterComponent;
  let fixture: ComponentFixture<CcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CcFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
