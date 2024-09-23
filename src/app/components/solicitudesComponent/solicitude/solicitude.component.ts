import { Component, OnInit } from '@angular/core';
import { SolicitudeService } from '../../../services/solicitudesService/solicitude.service';

@Component({
  selector: 'app-solicitude',
  templateUrl: './solicitude.component.html',
  styleUrls: ['./solicitude.component.css']
})
export class SolicitudeComponent implements OnInit {
  solicitations: any[] = [];
  persons: any[] = [];
  types: any[] = [];
  suppliers: any[] = [];
  currencies: any[] = [];
  
  showModal = false;
  isEditMode = false;
  // showDeleteConfirmModal = false; 
  currentSolicitation: any = {
    per_id: '',
    typ_sol_id: '',
    sup_id: '',
    cur_id: '',
    sol_status: '',
    sol_cost: 0,
    sol_description: ''
  };
  // solicitationToDeleteId: number | null = null;

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private solicitudeService: SolicitudeService) {}

  ngOnInit(): void {
    this.loadSolicitations();
    this.loadPersons();
    this.loadTypes();
    this.loadSuppliers();
    this.loadCurrencies();
  }

  loadSolicitations() {
    this.solicitudeService.getSolicitations().subscribe(data => {
      this.solicitations = data;
    });
  }

  loadPersons() {
    this.solicitudeService.getPersons().subscribe(data => {
      this.persons = data;
    });
  }

  loadTypes() {
    this.solicitudeService.getTypes().subscribe(data => {
      this.types = data;
    });
  }

  loadSuppliers() {
    this.solicitudeService.getSuppliers().subscribe(data => {
      this.suppliers = data;
    });
  }

  loadCurrencies() {
    this.solicitudeService.getCurrencies().subscribe(data => {
      this.currencies = data;
    });
  }

  openAddModal() {
    this.isEditMode = false;
    this.currentSolicitation = { per_id: '', typ_sol_id: '', sup_id: '', cur_id: '', sol_status: '', sol_cost: 0, sol_description: '' };
    this.showModal = true;
  }

  openEditModal(solicitation: any) {
    console.log("Solicitud seleccionada para editar: ", solicitation);  // Para depurar
    this.isEditMode = true;
    this.currentSolicitation = { ...solicitation };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // Método centralizado para manejar el envío de formularios tanto para creación como actualización
  onSubmitForm(form: any) {
    if (this.isEditMode) {
      this.updateSolicitation();
      console.log("Actualizando solicitud: ", this.currentSolicitation);  // Para depurar
    } else {
      this.createSolicitation();
      console.log("Creando nueva solicitud: ", this.currentSolicitation);  // Para depurar
    }
  }

  
createSolicitation() {
  console.log("Datos de solicitud enviados para crear: ", this.currentSolicitation);  // Para depurar
  this.solicitudeService.createSolicitation(this.currentSolicitation).subscribe(() => {
    this.loadSolicitations();
    this.closeModal();
  }, error => {
    console.error('Error al crear la solicitud', error); // Manejo de errores
  });
}

updateSolicitation() {
  console.log("Datos de solicitud enviados para actualizar: ", this.currentSolicitation);  // Para depurar
  this.solicitudeService.updateSolicitation(this.currentSolicitation.sol_id, this.currentSolicitation).subscribe(() => {
    this.loadSolicitations();
    this.closeModal();
  }, error => {
    console.error('Error al actualizar la solicitud', error); // Manejo de errores
  });
}

  // deleteSolicitation(id: number) {
  //   this.solicitationToDeleteId = id; // Guardar el ID de la solicitud que se desea eliminar
  //   this.showDeleteConfirmModal = true; // Mostrar el modal de confirmación
  // }

//   closeDeleteConfirmModal() {
//     this.showDeleteConfirmModal = false; // Cerrar el modal de confirmación
//     this.solicitationToDeleteId = null; // Reiniciar el ID de la solicitud
//   }

//   confirmDelete() {
//     if (this.solicitationToDeleteId !== null) {
//       console.log('ID de solicitud a eliminar:', this.solicitationToDeleteId); // Para depurar
//       this.solicitudeService.deleteSolicitation(this.solicitationToDeleteId).subscribe(
//         () => {
//           console.log(`Solicitud con ID ${this.solicitationToDeleteId} eliminada con éxito`); // Para depurar
//           this.loadSolicitations(); // Recargar las solicitudes después de eliminar
//           this.closeDeleteConfirmModal(); // Cerrar el modal de confirmación
//         },
//         error => {
//           console.error('Error al eliminar la solicitud', error); // Manejo de errores
//         }
//       );
//     }
// }
}
