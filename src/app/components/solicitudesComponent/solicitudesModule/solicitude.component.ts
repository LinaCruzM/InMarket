import { Component, OnInit } from '@angular/core';
import { SolicitudeService } from '../../../services/solicitudesService/solicitude.service';

@Component({
  selector: 'app-solicitude',
  templateUrl: './solicitude.component.html',
  styleUrls: ['./solicitude.component.css']
})
export class SolicitudeComponent implements OnInit {
  solicitations: any[] = [];
  filteredSolicitations: any[] = [];
  persons: any[] = [];
  types: any[] = [];
  suppliers: any[] = [];
  currencies: any[] = [];
  
  showModal = false;
  isEditMode = false;
  currentSolicitation: any = {
    per_id: '',
    typ_sol_id: '',
    sup_id: '',
    cur_id: '',
    sol_status: '',
    sol_cost: 0,
    sol_description: ''
  };

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
      this.filteredSolicitations = data; // Inicializamos ambas listas
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

  onSearchChange(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();
    this.filteredSolicitations = this.solicitations.filter(solicitation => {
      const fullName = solicitation.Person.per_name.toLowerCase() + ' ' + solicitation.Person.per_lastname.toLowerCase();
      const type = solicitation.Type_Solicitation.typ_sol_name.toLowerCase();
      const supplier = solicitation.Supplier.sup_name.toLowerCase();
      return fullName.includes(searchTerm) || type.includes(searchTerm) || supplier.includes(searchTerm);
    });
  }

  openAddModal() {
    this.isEditMode = false;
    this.currentSolicitation = { per_id: '', typ_sol_id: '', sup_id: '', cur_id: '', sol_status: '', sol_cost: 0, sol_description: '' };
    this.showModal = true;
  }

  openEditModal(solicitation: any) {
    this.isEditMode = true;
    this.currentSolicitation = { ...solicitation };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmitForm(form: any) {
    if (this.isEditMode) {
      this.updateSolicitation();
    } else {
      this.createSolicitation();
    }
  }
  

  createSolicitation() {
    this.solicitudeService.createSolicitation(this.currentSolicitation).subscribe(() => {
      this.loadSolicitations();
      this.closeModal();
    }, error => {
      console.error('Error al crear la solicitud', error);
    });
  }

  updateSolicitation() {
    this.solicitudeService.updateSolicitation(this.currentSolicitation.sol_id, this.currentSolicitation).subscribe(() => {
      this.loadSolicitations();
      this.closeModal();
    }, error => {
      console.error('Error al actualizar la solicitud', error);
    });
  }
}
