import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../../services/personsService/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: any[] = [];
  roles: any[] = [];  // Asegúrate de cargar los roles disponibles
  showModal = false;
  isEditMode = false;
  currentPerson = {
    per_id: 0,  // Cambiado a number
    per_name: '',
    per_lastname: '',
    per_mail: '',
    per_password: '',
    rol_id: 0,  // Cambiado a number
    per_status: 0
  };

  showDeleteConfirmModal = false;
  personToDelete: any = null;
  
  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    this.loadPersons();
    this.loadRoles();  // Cargar roles si es necesario
  }

  loadPersons() {
    this.personService.getPersons().subscribe(
      (data) => {
        this.persons = data;
      },
      (error) => {
        console.error('Error fetching persons:', error);
      }
    );
  }

  loadRoles() {
    this.personService.getRoles().subscribe(
      (data) => {
        this.roles = data;  // Se corrigió la asignación a roles
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }

  // Abrir modal para agregar usuario
  openModal() {
    this.isEditMode = false;
    this.resetForm();
    this.showModal = true;
  }

  // Cerrar modal
  closeModal() {
    this.showModal = false;
  }

  // Resetear el formulario
  resetForm() {
    this.currentPerson = {
      per_id: 0,  // Cambiado a number
      per_name: '',
      per_lastname: '',
      per_mail: '',
      per_password: '',
      rol_id: 0,  // Cambiado a number
      per_status: 0
    };
  }

  // Método para editar usuario
  editPerson(person: any) {
    this.isEditMode = true;
    this.currentPerson = { ...person };
    this.showModal = true;
  }

  // Método para eliminar usuario
  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(
      () => {
        this.loadPersons(); // Recargar la lista después de eliminar
      },
      (error) => {
        console.error('Error deleting person:', error);
      }
    );
  }

  // Método para enviar el formulario (crear o actualizar)
  onSubmitForm() {
    // Convertir per_id a número si es necesario
    this.currentPerson.per_id = +this.currentPerson.per_id;

    if (this.isEditMode) {
      this.personService.updatePerson(this.currentPerson.per_id, this.currentPerson).subscribe(
        () => this.loadPersons(),
        (error) => console.error('Error updating person:', error)
      );
    } else {
      this.personService.createPerson(this.currentPerson).subscribe(
        () => this.loadPersons(),
        (error) => console.error('Error adding person:', error)
      );
    }
    this.closeModal();
  }

  // Abrir modal de confirmación de eliminación
openDeleteConfirmModal(person: any) {
  this.personToDelete = person;
  this.showDeleteConfirmModal = true;
}

// Cerrar modal de confirmación de eliminación
closeDeleteConfirmModal() {
  this.showDeleteConfirmModal = false;
  this.personToDelete = null;
}

// Confirmar la eliminación del usuario
confirmDelete() {
  if (this.personToDelete) {
    this.deletePerson(this.personToDelete.per_id);
    this.closeDeleteConfirmModal();  // Cierra el modal después de eliminar
  }
}
}
