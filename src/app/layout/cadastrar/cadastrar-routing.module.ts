import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cadastrarComponent } from './cadastrar.component';

const routes: Routes = [
    {
        path: '',
        component: cadastrarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class cadastrarRoutingModule {}
