import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidesPage } from './sides.page';

describe('SidesPage', () => {
  let component: SidesPage;
  let fixture: ComponentFixture<SidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
