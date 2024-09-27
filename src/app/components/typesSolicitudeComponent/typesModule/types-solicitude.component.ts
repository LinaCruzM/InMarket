import { Component, OnInit } from '@angular/core';
import { TypesSolicitudeService } from '../../../services/typesSolicitudeService/types-solicitude.service';

@Component({
  selector: 'app-types-solicitude',
  templateUrl: './types-solicitude.component.html',
  styleUrls: ['./types-solicitude.component.css']
})
export class TypesSolicitudeComponent implements OnInit {
  typeSolicitations: any[] = [];
  showModal = false;
  showDeleteModal = false;
  typeToDelete: number | null = null;
  filteredTypes: any[] = [];
  isEditMode = false;
  currentType = {
    typ_sol_id: 0,
    typ_sol_name: ''
  };

  constructor(private typesSolicitudService: TypesSolicitudeService) {}

  ngOnInit(): void {
    this.loadTypeSolicitations();
  }

  loadTypeSolicitations() {
    this.typesSolicitudService.getTypeSolicitations().subscribe(
      (data) => {
        this.typeSolicitations = data;
        this.filteredTypes = data;  
      },
      (error) => {
        console.error('Error fetching type solicitations:', error);
      }
    );
  }

  filterTypes(searchTerm: string) {
    if (!searchTerm) {
      this.filteredTypes = this.typeSolicitations; // Si no hay término, mostrar todos los roles
      return;
    }
    this.filteredTypes = this.typeSolicitations.filter(type =>
      type.typ_sol_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Método para abrir el modal en modo edición
  editTypeSolicitation(typeId: number) {
    const typeToEdit = this.typeSolicitations.find(type => type.typ_sol_id === typeId);
    if (typeToEdit) {
      this.isEditMode = true;
      this.currentType = { ...typeToEdit };
      this.showModal = true;
    } else {
      console.error('Tipo de solicitud no encontrado');
    }
  }

  // Método para abrir el modal en modo agregar
  openModal() {
    this.isEditMode = false;
    this.currentType = {
      typ_sol_id: 0,
      typ_sol_name: ''
    };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // Método para eliminar un tipo de solicitud
  deleteTypeSolicitation(typeId: number) {
    this.typesSolicitudService.deleteTypeSolicitation(typeId).subscribe(
      () => {
        this.loadTypeSolicitations(); 
        this.closeDeleteModal();
      },
      (error) => {
        console.error('Error eliminando el tipo de solicitud:', error);
      }
    );
  }

  // Método para confirmar la eliminación
  confirmDeleteTypeSolicitation(typeId: number) {
    this.typeToDelete = typeId;
    this.showDeleteModal = true;
  } 

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.typeToDelete = null;
  }

  onSubmitForm() { 
    if (this.isEditMode) {
      this.typesSolicitudService.updateTypeSolicitation(this.currentType.typ_sol_id, this.currentType).subscribe(() => {
        this.loadTypeSolicitations();
        this.closeModal();
      });
    } else {
      this.typesSolicitudService.createTypeSolicitation(this.currentType).subscribe(() => {
        this.loadTypeSolicitations();
        this.closeModal();
      });
    }
  }
}
