import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-notifications',
  templateUrl: './search-notifications.component.html',
  styleUrls: ['./search-notifications.component.css']
})
export class SearchNotificationsComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchEvent.emit(inputElement.value); // Emitimos el valor del input
  }
}
