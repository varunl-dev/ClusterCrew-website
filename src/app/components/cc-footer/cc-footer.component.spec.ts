import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CCFooterComponent } from './cc-footer.component';


describe('CcFooterComponent', () => {
  let component: CCFooterComponent;
  let fixture: ComponentFixture<CCFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
