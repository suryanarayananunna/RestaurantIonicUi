import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrupalPage } from './drupal.page';

describe('DrupalPage', () => {
  let component: DrupalPage;
  let fixture: ComponentFixture<DrupalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrupalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrupalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
