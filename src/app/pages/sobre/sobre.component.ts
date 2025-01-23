import { Component } from '@angular/core';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [NavbarComponent, FooterComponent, WhatsappComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
