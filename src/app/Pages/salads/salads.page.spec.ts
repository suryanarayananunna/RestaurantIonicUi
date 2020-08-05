import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaladsPage } from './salads.page';

describe('SaladsPage', () => {
  let component: SaladsPage;
  let fixture: ComponentFixture<SaladsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaladsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
