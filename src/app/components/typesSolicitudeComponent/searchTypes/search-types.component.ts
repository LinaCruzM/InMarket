import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-types',
  templateUrl: './search-types.component.html',
  styleUrl: './search-types.component.css'
})
export class SearchTypesComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchEvent.emit(inputElement.value); // Emitimos el valor del input
  }
}
