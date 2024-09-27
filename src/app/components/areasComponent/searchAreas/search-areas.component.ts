import { Component, EventEmitter, Output } from '@angular/core';
 
@Component({
  selector: 'app-search-areas',
  templateUrl: './search-areas.component.html',
  styleUrl: './search-areas.component.css'
})
export class SearchAreasComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchEvent.emit(inputElement.value); // Emitimos el valor del input
  }
}
