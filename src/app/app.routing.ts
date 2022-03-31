/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'Teams',
        loadChildren: () => import('../app/features/features-routing.module').then((m) => m.FeaturesRoutingModule),
    },
    {
        path: '**',
        redirectTo: 'Teams',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
