import { Component, OnInit } from '@angular/core';
import { AreasService } from '../../../services/areasService/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  areas: any[] = [];
  showModal = false;
  showDeleteConfirmModal = false;
  isEditMode = false;
  currentArea = {
    are_id: 0,
    are_name: '',
    are_limit: 0
  };
  areaToDelete: any = null;

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

  openModal() {
    this.isEditMode = false;
    this.resetForm();
    this.showModal = true;
  }

  editArea(area: any) {
    this.isEditMode = true;
    this.currentArea = { ...area }; // Asignar todo el objeto del área
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  resetForm() {
    this.currentArea = {
      are_id: 0,
      are_name: '',
      are_limit: 0
    };
  }

  onSubmitForm() {
    if (this.isEditMode) {
      this.areasService.updateArea(this.currentArea.are_id, this.currentArea).subscribe(
        () => this.loadAreas(),
        (error) => console.error('Error updating area:', error)
      );
    } else {
      this.areasService.createArea(this.currentArea).subscribe(
        () => this.loadAreas(),
        (error) => console.error('Error creating area:', error)
      );
    }
    this.closeModal();
  }

  openDeleteConfirmModal(area: any) {
    this.areaToDelete = area;
    this.showDeleteConfirmModal = true;
  }
  
  confirmDelete() {
    if (this.areaToDelete) {
      this.areasService.deleteArea(this.areaToDelete.are_id).subscribe(
        () => {
          this.loadAreas();  // Recargar áreas después de eliminar
          this.closeDeleteConfirmModal();  // Cerrar modal
        },
        (error) => console.error('Error deleting area:', error)
      );
    }
  }
  
  closeDeleteConfirmModal() {
    this.showDeleteConfirmModal = false;
    this.areaToDelete = null;
  } 
}
