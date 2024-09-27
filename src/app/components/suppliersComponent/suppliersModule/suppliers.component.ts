import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../services/suppliersService/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: any[] = [];
  showModal = false;
  showDeleteModal = false;
  supplierToDelete: number | null = null;
  filteredSuppliers: any[] = [];
  isEditMode = false;
  currentSupplier = {
    sup_id: 0,
    sup_name: ''
  };

  constructor(private suppliersService: SuppliersService) {}

  ngOnInit(): void {
    this.loadSuppliers(); 
  }

  loadSuppliers() {
    this.suppliersService.getSuppliers().subscribe(
      (data: any[]) => {
        this.suppliers = data;
        this.filteredSuppliers = data;  
      },
      (error: any) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  } 

  filterSuppliers(searchTerm: string) {
    if (!searchTerm) {
      this.filteredSuppliers = this.suppliers; 
      return;
    } 
    this.filteredSuppliers = this.suppliers.filter(supplier =>
      supplier.sup_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Abrir modal en modo agregar
  openModal() {
    this.isEditMode = false;
    this.currentSupplier = {
      sup_id: 0,
      sup_name: ''
    };
    this.showModal = true;
  }

  // Cerrar modal
  closeModal() {
    this.showModal = false;
  }

  // Abrir modal en modo edición
  editSupplier(supId: number) {
    const supplierToEdit = this.suppliers.find(supplier => supplier.sup_id === supId);
    if (supplierToEdit) {
      this.isEditMode = true;
      this.currentSupplier = { ...supplierToEdit };
      this.showModal = true;
    } else {
      console.error('Proveedor no encontrado');
    }
  }
  

  // Confirmar eliminación
  confirmDeleteSupplier(supId: number) {
    this.supplierToDelete = supId;
    this.showDeleteModal = true;
  }

  // Cerrar modal de confirmación de eliminación
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.supplierToDelete = null;
  }

  // Eliminar proveedor
  deleteSupplier(supId: number) {
    this.suppliersService.deleteSupplier(supId).subscribe(
      () => {
        this.loadSuppliers();
        this.closeDeleteModal();
      },
      (error: any) => {
        console.error('Error eliminando el proveedor:', error);
      }
    );
  }

  // Guardar cambios o agregar proveedor
  onSubmitForm() { 
    if (this.isEditMode) {
      this.suppliersService.updateSupplier(this.currentSupplier.sup_id, this.currentSupplier).subscribe(() => {
        this.loadSuppliers();
        this.closeModal();
      }, (error: any) => {
        console.error('Error actualizando proveedor:', error);
      });
    } else {
      this.suppliersService.createSupplier(this.currentSupplier).subscribe(() => {
        this.loadSuppliers();
        this.closeModal();
      }, (error: any) => {
        console.error('Error creando proveedor:', error);
      });
    }
  }
  
  
}
