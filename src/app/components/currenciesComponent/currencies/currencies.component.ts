import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../../services/currenciesServices/currencies.service';


@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.css'
})
export class CurrenciesComponent  implements OnInit{
  currencies: any[] = [];

  constructor(private currenciesService: CurrenciesService) {}

  ngOnInit(): void {
    this.loadCurrencies();
  }

  loadCurrencies() {
    this.currenciesService.getCurrencies().subscribe(
      (data: any[]) => {
        this.currencies = data;
      },
      (error: any) => {
        console.error('Error fetching currencies:', error);
      }
    );
  }

  deleteCurrency(id: number) {
    this.currenciesService.deleteCurrency(id).subscribe(
      () => {
        this.loadCurrencies(); // Recargar la lista después de eliminar
      },
      (error: any) => {
        console.error('Error deleting currency:', error);
      }
    );
  }

  editCurrency(id: number) {
    // Implementar lógica de edición
  }
}
