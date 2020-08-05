import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordPressPage } from './word-press.page';

describe('WordPressPage', () => {
  let component: WordPressPage;
  let fixture: ComponentFixture<WordPressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordPressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordPressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
