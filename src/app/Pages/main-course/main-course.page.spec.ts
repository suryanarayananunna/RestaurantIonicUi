import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainCoursePage } from './main-course.page';

describe('MainCoursePage', () => {
  let component: MainCoursePage;
  let fixture: ComponentFixture<MainCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
