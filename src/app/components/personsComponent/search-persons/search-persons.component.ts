import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-persons', 
  templateUrl: './search-persons.component.html',
  styleUrl: './search-persons.component.css'
})
export class SearchPersonsComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Aseguramos que es un input
    this.searchEvent.emit(inputElement.value); // Emitimos el valor del input
  }
  
}
