import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { GeneralitesComponent } from './pages/generalites/generalites.component';
import { EnergieComponent } from './pages/energie/energie.component';
import { EtudesComponent } from './pages/etudes/etudes.component';
import { GenieComponent } from './pages/genie/genie.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { DepannageComponent } from './pages/depannage/depannage.component';
import { VentesComponent } from './pages/ventes/ventes.component';
import { PolitiquesSstComponent } from './pages/politiques-sst/politiques-sst.component';
import { PolitiquesEnvironnementaleComponent } from './pages/politiques-environnementale/politiques-environnementale.component';
import { RealisationsComponent } from './pages/realisations/realisations.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

  { path: 'acceuil', component: AcceuilComponent },

  { path: '', component: AcceuilComponent },

  { path: 'generalites', component: GeneralitesComponent },

  { path: 'energie', component: EnergieComponent },

  { path: 'genie', component: GenieComponent },

  { path: 'maintenance', component: MaintenanceComponent },

  { path: 'depannage', component: DepannageComponent },

  { path: 'ventes', component: VentesComponent },

  { path: 'etudes', component: EtudesComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'politiquesenvironnementale', component: PolitiquesEnvironnementaleComponent },

  { path: 'politiquesSst', component: PolitiquesSstComponent },

  { path: 'realisations', component: RealisationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
