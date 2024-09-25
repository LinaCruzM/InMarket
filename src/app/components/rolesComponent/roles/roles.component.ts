import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../../services/rolesService/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: any[] = [];
  areas: any[] = [];
  showModal = false;
  showDeleteModal = false; // Inicialmente el modal está oculto
  rolToDelete: number | null = null;
  isEditMode = false;
  currentRol = {
    rol_id: 0,  // Cambiado a number
    rol_name: '',
    are_id: 0
  };

  constructor(private rolService: RolesService) {}

  ngOnInit(): void {
    this.loadRoles();
    this.loadAreas();
  }

  loadRoles() {
    this.rolService.getAllRoles().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }

  loadAreas() {
    this.rolService.getAllAreas().subscribe(
      (data) => {
        this.areas = data;
      },
      (error) => {
        console.error('Error fetching areas:', error);
      }
    );
  }

  // Método para abrir el modal en modo edición
  editRol(rolId: number) {
    const rolToEdit = this.roles.find(rol => rol.rol_id === rolId);
    if (rolToEdit) {
      this.isEditMode = true; // Indica que el modal estará en modo de edición
      this.currentRol = { ...rolToEdit }; // Copiamos los datos del rol seleccionado
      this.showModal = true; // Mostramos el modal
    } else {
      console.error('Rol no encontrado');
    }
  }
  

  // Método para abrir el modal en modo agregar
  openModal() {
    this.isEditMode = false;
    this.currentRol = {
      rol_id: 0,     // Inicializamos a 0 o un valor que haga sentido para un nuevo rol
      rol_name: '',  // Inicializamos como una cadena vacía
      are_id: 0      // Inicializamos a 0 o un valor por defecto
    };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // Método para eliminar un rol
  deleteRol(rolId: number) {
    this.rolService.deleteRol(rolId).subscribe(
      () => {
        this.loadRoles(); 
        this.closeDeleteModal();// Recargar la lista de roles después de eliminar
      },
      (error) => {
        console.error('Error deleting role:', error);
      }
    );
  }

  // Método para confirmar la eliminación
  confirmDeleteRol(rolId: number) {
    this.rolToDelete = rolId;
    this.showDeleteModal = true; // Abre el modal de confirmación
  }  

  closeDeleteModal() {
    this.showDeleteModal = false; // Cierra el modal
    this.rolToDelete = null; // Limpia el rol a eliminar
  }
  

  onSubmitForm() {
    if (this.isEditMode) {
      // Actualización de un rol existente
      this.rolService.updateRol(this.currentRol.rol_id, this.currentRol).subscribe(() => {
        this.loadRoles();
        this.closeModal();
      });
    } else {
      // Creación de un nuevo rol
      this.rolService.createRol(this.currentRol).subscribe(() => {
        this.loadRoles();
        this.closeModal();
      });
    }
  }
  
}
