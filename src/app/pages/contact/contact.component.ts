import { Component, OnInit, ViewChild } from '@angular/core';
//import { MouseEvent } from '@agm/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { MessageService } from '../../services/message.service';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;
  latitude = 12.450953551583895;
  longitude = -1.5552434954043148;
  submitted=false;
  spinner=false;
  public iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

  constructor(private fb:FormBuilder,public firestore:AngularFirestore, public serv:MessageService){
    this.form=this.fb.group({
      nom:['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+'),Validators.minLength(2)]],
      email: ['',[ Validators.required]],
      message:['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+'),Validators.minLength(2)]],
    })
  }

  ngOnInit(): void {
    this.submitted=false;
    this.spinner=false;
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

/*
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }

  addMarker(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
    }
*/
    submit()
    {
      if(this.form.controls['email'].value!==null && this.form.controls['nom'].value!==null && this.form.controls['message'].value!==null)
      {

        this.spinner=true;

        setTimeout(()=>{
          this.serv.add(this.form.value)
          this.spinner=false;
        },8000)
      }

      this.turn();

    }

    turn()
    {
      this.submitted=true;
      console.log(this.submitted)
    }

    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    center: google.maps.LatLngLiteral = {
      lat: 12.450953551583895,
      lng: -1.5552434954043148
  };
  zoom = 16;
  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markerPositions: google.maps.LatLngLiteral = {
    lat: 12.450953551583895,
    lng: -1.5552434954043148
};

openInfoWindow(marker: MapMarker) {
  if (this.infoWindow != undefined) this.infoWindow.open(marker);
}

}
