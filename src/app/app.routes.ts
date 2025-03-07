import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';
import { DataProtectionComponent } from './main-content/data-protection/data-protection.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'data-protection', component: DataProtectionComponent }
];
