import { Component, OnInit } from '@angular/core';
import { AreasService } from '../../../services/areasService/areas.service';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent implements OnInit{
  areas: any[] = [];

  constructor(private areasService: AreasService) {}

  ngOnInit(): void {
    this.loadAreas();
  }

  loadAreas() {
    this.areasService.getAllAreas().subscribe(
      (data) => {
        this.areas = data;
      },
      (error) => {
        console.error('Error fetching areas:', error);
      }
    );
  }

  deleteArea(id: number) {
    this.areasService.deleteArea(id).subscribe(
      () => {
        this.loadAreas(); // Recargar la lista después de eliminar
      },
      (error) => {
        console.error('Error deleting area:', error);
      }
    );
  }

  editArea(id: number) {
    // Implementar lógica de edición
  }
}
