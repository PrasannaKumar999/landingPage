import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightTabComponent } from './flight-tab/flight-tab.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReviewboxComponent } from './reviewbox/reviewbox.component';
import { SubscribeBoxComponent } from './subscribe-box/subscribe-box.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FlightTabComponent,
    ReviewboxComponent,
    SubscribeBoxComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatSelectModule,
     MatInputModule, 
     FormsModule
  ],
  exports:[HeaderComponent,FooterComponent,FlightTabComponent,ReviewboxComponent,SubscribeBoxComponent]
})
export class SharedModule { }
