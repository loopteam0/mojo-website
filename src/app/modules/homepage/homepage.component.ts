import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {


  // Carousel Implementation

  carouselImages: string[] = ['image1', 'image2', 'image3']; // CSS classes for background images
  currentIndex: number = 0;
  currentImage: string = this.carouselImages[this.currentIndex];
  interval: number = 3000; // Interval in milliseconds for carousel

  ngOnInit(){
    // Moving to next image after specified interval
    setInterval(() => {
      this.next();
    }, this.interval);
  }

  next(){
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
    this.currentImage = this.carouselImages[this.currentIndex];
  }

}
