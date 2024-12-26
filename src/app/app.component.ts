import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ColorClassDirective } from './color-class.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ColorClassDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pagination';
  currentPageIndex : number = 0;

  setActivePage(i : number) : string{
    return this.currentPageIndex==i ? "active":"";
  }
  CheckindexVisibility(index : number):boolean{
    return Math.abs(this.currentPageIndex-index)<5
  }
  images=[
    {
      title : "At The Beach1",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb4a18gBEfwbg5ojk6MI6JpzQbnb-OpUirA&s",  
    },
    {
      title : "At The Beach2",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeNxhT1OVBquTqDPet33UqbBtvrm7I9PQvw&s",  
    },
    {
      title : "At The Beach3",
      Url : "https://images.photowall.com/products/73393/perfect-beach.jpg?h=699&q=85",  
    },
    {
      title : "At The Beach4",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeDg3_B6u6R6ZFFqKD93WWMppOYal1Gj4vw&s",  
    },
    {
      title : "At The Beach5",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb4a18gBEfwbg5ojk6MI6JpzQbnb-OpUirA&s",  
    },
    {
      title : "At The Beach6",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeNxhT1OVBquTqDPet33UqbBtvrm7I9PQvw&s",  
    },
    {
      title : "At The Beach7",
      Url : "https://images.photowall.com/products/73393/perfect-beach.jpg?h=699&q=85",  
    },
    {
      title : "At The Beach8",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeDg3_B6u6R6ZFFqKD93WWMppOYal1Gj4vw&s",  
    },
    {
      title : "At The Beach9",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb4a18gBEfwbg5ojk6MI6JpzQbnb-OpUirA&s",  
    },
    {
      title : "At The Beach10",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeNxhT1OVBquTqDPet33UqbBtvrm7I9PQvw&s",  
    },
    {
      title : "At The Beach11",
      Url : "https://images.photowall.com/products/73393/perfect-beach.jpg?h=699&q=85",  
    },
    {
      title : "At The Beach12",
      Url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeDg3_B6u6R6ZFFqKD93WWMppOYal1Gj4vw&s",  
    },
    
  ]
}
