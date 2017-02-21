import { RouterModule, Routes } from '@angular/router';

import {StaticComponent} from "./components/static/static.component";

const routes: Routes = [
  { path: '', component: StaticComponent }
];

export const routing = RouterModule.forRoot(routes);
