import { Component, OnInit  } from '@angular/core';
import {SolicitudeService} from '../../../services/solicitudesService/solicitude.service' ;

@Component({
  selector: 'app-solicitude',
  templateUrl: './solicitude.component.html',
  styleUrl: './solicitude.component.css'
})
export class SolicitudeComponent  implements OnInit{
  solicitations: any[] = [];

  constructor(private solicitudeService: SolicitudeService) {}

  ngOnInit(): void {
    this.loadSolicitations();
  }

  loadSolicitations() {
    this.solicitudeService.getSolicitations().subscribe(data => {
      this.solicitations = data;
    });
  }

  deleteSolicitation(id: number) {
    this.solicitudeService.deleteSolicitation(id).subscribe(() => {
      this.loadSolicitations(); // Recargar la tabla después de eliminar
    });
  }
}
