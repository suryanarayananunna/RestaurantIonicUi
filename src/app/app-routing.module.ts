import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'favorites',
    loadChildren: () => import('./Pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./Pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./Pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./Pages/contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./Pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'posts-display',
    loadChildren: () => import('./Pages/posts-display/posts-display.module').then( m => m.PostsDisplayPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./Pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'appetizers',
    loadChildren: () => import('./Pages/appetizers/appetizers.module').then( m => m.AppetizersPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./Pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'salads',
    loadChildren: () => import('./Pages/salads/salads.module').then( m => m.SaladsPageModule)
  },
  {
    path: 'sides',
    loadChildren: () => import('./Pages/sides/sides.module').then( m => m.SidesPageModule)
  },
  {
    path: 'desserts',
    loadChildren: () => import('./Pages/desserts/desserts.module').then( m => m.DessertsPageModule)
  },
  {
    path: 'main-course',
    loadChildren: () => import('./Pages/main-course/main-course.module').then( m => m.MainCoursePageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./Pages/articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'word-press',
    loadChildren: () => import('./Pages/word-press/word-press.module').then( m => m.WordPressPageModule)
  },
  {
    path: 'drupal',
    loadChildren: () => import('./Pages/drupal/drupal.module').then( m => m.DrupalPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./Pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./Pages/albums/albums.module').then( m => m.AlbumsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
