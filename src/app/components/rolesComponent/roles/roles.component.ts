import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../../services/rolesService/roles.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  roles: any[] = [];

  constructor(private rolService: RolesService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.rolService.getRoles().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }

  deleteRol(id: number) {
    this.rolService.deleteRol(id).subscribe(
      () => {
        this.loadRoles(); // Recargar la lista después de eliminar
      },
      (error) => {
        console.error('Error deleting role:', error);
      }
    );
  }

  editRol(id: number) {
    // Implementar lógica de edición
  }
}
