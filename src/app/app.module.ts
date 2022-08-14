import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
//import { AgmCoreModule } from '@agm/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule,AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, FirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { GoogleMapsModule } from '@angular/google-maps'
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    GeneralitesComponent,
    EnergieComponent,
    EtudesComponent,
    GenieComponent,
    MaintenanceComponent,
    DepannageComponent,
    VentesComponent,
    PolitiquesSstComponent,
    PolitiquesEnvironnementaleComponent,
    RealisationsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    FirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    ReactiveFormsModule,
    GoogleMapsModule,
   AngularFireModule.initializeApp(environment.firebase),
/* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAosX1kf5h0myKulz8AF9sDKxtMlI69Sko',
      libraries: ['places']
    })*/
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
