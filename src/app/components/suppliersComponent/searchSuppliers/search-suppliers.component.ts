import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-suppliers',
  templateUrl: './search-suppliers.component.html',
  styleUrl: './search-suppliers.component.css'
})
export class SearchSuppliersComponent {
  @Output() searchEvent = new EventEmitter<string>();
 
  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchEvent.emit(inputElement.value); // Emitimos el valor del input
  }
}
