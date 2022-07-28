import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
// import { ViewPageComponent } from './pages/view-page/view-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'post/list',
    pathMatch:'full'
  },
  {
    path: 'post/list',
    component:ListPageComponent,
  },
  // {
  //   path:'post/ViewPage',
  //   component:ViewPageComponent,
  // },
  {
    path: 'post/:id/edit',
    component:EditPageComponent,
  },
  {
    path: 'post/create',
    component:CreatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
