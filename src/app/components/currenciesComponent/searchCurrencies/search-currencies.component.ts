import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-currencies',
  templateUrl: './search-currencies.component.html',
  styleUrl: './search-currencies.component.css'
})
export class SearchCurrenciesComponent {
  @Output() searchEvent = new EventEmitter<string>();
 
  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchEvent.emit(inputElement.value); // Emitimos el valor del input
  }
}
