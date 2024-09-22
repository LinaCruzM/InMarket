import { Component, OnInit } from '@angular/core';
import {PersonsService} from '../../../services/personsService/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit {
  persons: any[] = [];

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    this.loadPersons();
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

  // Método para eliminar persona
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

  // Método para editar persona (puedes implementar un formulario o modal)
  editPerson(id: number) {
    // Lógica para editar
  }
}
