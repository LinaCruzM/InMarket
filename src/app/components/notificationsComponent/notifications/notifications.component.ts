import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../services/notificationsService/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
  news: any[] = []; // Cambia el tipo según tu modelo

  constructor(private newsService: NotificationsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getAllNews().subscribe(
      (data) => {
        this.news = data;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
