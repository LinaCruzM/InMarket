import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-solicitude',
  templateUrl: './search-solicitude.component.html',
  styleUrl: './search-solicitude.component.css'
})
export class SearchSolicitudeComponent {
  searchQuery: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange() {
    this.searchChange.emit(this.searchQuery);
  }

}
