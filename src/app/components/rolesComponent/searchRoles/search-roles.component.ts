import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-roles',
  templateUrl: './search-roles.component.html',
  styleUrl: './search-roles.component.css'
})
export class SearchRolesComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchEvent.emit(inputElement.value); // Emitimos el valor del input
  }
}
