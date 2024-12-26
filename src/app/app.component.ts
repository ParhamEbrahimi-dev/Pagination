import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pagination';
  currentPageIndex : number = 0;

  setActivePage(i : number) : string{
    return this.currentPageIndex==i ? "active":"";
  }
  images=[
    {
      title : "At The Beach",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb4a18gBEfwbg5ojk6MI6JpzQbnb-OpUirA&s",  
    },
    {
      title : "At The Beach",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb4a18gBEfwbg5ojk6MI6JpzQbnb-OpUirA&s",  
    },
    {
      title : "At The Beach",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb4a18gBEfwbg5ojk6MI6JpzQbnb-OpUirA&s",  
    },
    {
      title : "At The Beach",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb4a18gBEfwbg5ojk6MI6JpzQbnb-OpUirA&s",  
    },
    
  ]
}
