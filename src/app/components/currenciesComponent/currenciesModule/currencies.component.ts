import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../../services/currenciesServices/currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currencies: any[] = [];
  showModal = false;
  showDeleteModal = false;
  currencyToDelete: number | null = null;
  isEditMode = false;
  currentCurrency = {
    cur_id: 0,
    cur_name: ''
  };

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

  editCurrency(curId: number) {
    const currencyToEdit = this.currencies.find(currency => currency.cur_id === curId);
    if (currencyToEdit) {
      this.isEditMode = true;
      this.currentCurrency = { ...currencyToEdit };
      this.showModal = true;
    } else {
      console.error('Divisa no encontrada');
    }
  }

  openModal() {
    this.isEditMode = false;
    this.currentCurrency = {
      cur_id: 0,
      cur_name: ''
    };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmDeleteCurrency(id: number) {
    this.currencyToDelete = id;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.currencyToDelete = null;
  }

  deleteCurrency(id: number) {
    if (id) {
      this.currenciesService.deleteCurrency(id).subscribe(
        () => {
          this.loadCurrencies(); 
          this.closeDeleteModal();
        },
        (error: any) => {
          console.error('Error eliminando la divisa:', error);
        }
      );
    }
  }

  onSubmitForm() { 
    if (this.isEditMode) {
      this.currenciesService.updateCurrency(this.currentCurrency.cur_id, this.currentCurrency).subscribe(() => {
        this.loadCurrencies();
        this.closeModal();
      }, (error: any) => {
        console.error('Error actualizando divisa:', error);
      });
    } else {
      this.currenciesService.createCurrency(this.currentCurrency).subscribe(() => {
        this.loadCurrencies();
        this.closeModal();
      }, (error: any) => {
        console.error('Error creando divisa:', error);
      });
    }
  }
}
