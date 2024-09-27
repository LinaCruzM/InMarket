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
  filteredRoles: any[] = []; // Inicializamos esta propiedad
  showModal = false;
  showDeleteModal = false;
  rolToDelete: number | null = null;
  isEditMode = false;
  currentRol = {
    rol_id: 0,
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
        this.filteredRoles = data; // Inicializamos filteredRoles con los datos cargados
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

  filterRoles(searchTerm: string) {
    if (!searchTerm) {
      this.filteredRoles = this.roles; // Si no hay término, mostrar todos los roles
      return;
    }
    
    this.filteredRoles = this.roles.filter(rol =>
      rol.rol_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  editRol(rolId: number) {
    const rolToEdit = this.roles.find(rol => rol.rol_id === rolId);
    if (rolToEdit) {
      this.isEditMode = true;
      this.currentRol = { ...rolToEdit };
      this.showModal = true;
    } else {
      console.error('Rol no encontrado');
    }
  }

  openModal() {
    this.isEditMode = false;
    this.currentRol = {
      rol_id: 0,
      rol_name: '',
      are_id: 0
    };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteRol(rolId: number) {
    this.rolService.deleteRol(rolId).subscribe(
      () => {
        this.loadRoles();
        this.closeDeleteModal();
      },
      (error) => {
        console.error('Error deleting role:', error);
      }
    );
  } 

  confirmDeleteRol(rolId: number) {
    this.rolToDelete = rolId;
    this.showDeleteModal = true;
  }  

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.rolToDelete = null;
  }

  onSubmitForm(rol: any) {
    if (this.isEditMode) {
      this.rolService.updateRol(rol.rol_id, rol).subscribe(() => {
        this.loadRoles();
        this.closeModal();
      });
    } else {
      this.rolService.createRol(rol).subscribe(() => {
        this.loadRoles();
        this.closeModal();
      });
    }
  }
}
