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
