import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./routes/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
  },
  {
    path: 'typography',
    loadChildren: () => import('./routes/typography-example/typography-example.module')
      .then(m => m.TypographyExampleModule),
  },
  {
    path: 'button',
    loadChildren: () => import('./routes/button-example/button-example.module')
      .then(m => m.ButtonExampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
