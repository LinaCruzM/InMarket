import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../services/suppliersService/suppliers.service';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent implements OnInit {
  suppliers: any[] = [];

  constructor(private suppliersService: SuppliersService) {}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.suppliersService.getSuppliers().subscribe(
      (data: any[]) => {  // Define el tipo de `data`
        this.suppliers = data;
      },
      (error: any) => {   // Define el tipo de `error`
        console.error('Error fetching suppliers:', error);
      }
    );
  }
  
  deleteSupplier(id: number) {
    this.suppliersService.deleteSupplier(id).subscribe(
      () => {
        this.loadSuppliers(); // Recargar la lista después de eliminar
      },
      (error: any) => {  // Define el tipo de `error`
        console.error('Error deleting supplier:', error);
      }
    );
  }

  editSupplier(id: number) {
    // Implementar lógica de edición
  }
}
