import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostsDisplayPage } from './posts-display.page';

describe('PostsDisplayPage', () => {
  let component: PostsDisplayPage;
  let fixture: ComponentFixture<PostsDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsDisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
