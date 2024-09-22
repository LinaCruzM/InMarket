import { Component, OnInit } from '@angular/core';
import { TypesSolicitudeService } from '../../../services/typesSolicitudeService/types-solicitude.service';


@Component({
  selector: 'app-types-solicitude',
  templateUrl: './types-solicitude.component.html',
  styleUrl: './types-solicitude.component.css'
})
export class TypesSolicitudeComponent implements OnInit{
  typeSolicitations: any[] = [];

  constructor(private typesSolicitudService: TypesSolicitudeService) {}

  ngOnInit(): void {
    this.loadTypeSolicitations();
  }

  loadTypeSolicitations() {
    this.typesSolicitudService.getTypeSolicitations().subscribe(
      (data) => {
        this.typeSolicitations = data;
      },
      (error) => {
        console.error('Error fetching type solicitations:', error);
      }
    );
  }

  deleteTypeSolicitation(id: number) {
    this.typesSolicitudService.deleteTypeSolicitation(id).subscribe(
      () => {
        this.loadTypeSolicitations(); // Recargar la lista después de eliminar
      },
      (error) => {
        console.error('Error deleting type solicitation:', error);
      }
    );
  }

  editTypeSolicitation(id: number) {
    // Implementar lógica de edición
  }
}
