import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../services/notificationsService/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  news: any[] = []; // Cambia el tipo según tu modelo
  filteredNews: any[] = []; // Para almacenar las notificaciones filtradas

  constructor(private newsService: NotificationsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getAllNews().subscribe(data => {
      // Ordena las noticias por fecha de manera descendente
      this.news = data.sort((a: any, b: any) => {
        return new Date(b.new_date).getTime() - new Date(a.new_date).getTime();
      });
      this.filteredNews = this.news; // Inicializa con todas las noticias
    });
  }

  filterNews(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredNews = this.news; // Si no hay término, mostrar todas las noticias
      return;
    }
    
    this.filteredNews = this.news.filter(item =>
      item.new_description.toLowerCase().includes(searchTerm.toLowerCase())
      || item.Person.per_name.toLowerCase().includes(searchTerm.toLowerCase())
      || item.Person.per_lastname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
