import { Component } from '@angular/core';
import { PageResponse } from 'src/app/models/data.models';
import { HomepageHero } from 'src/app/models/homepage.models';
import { DataService } from 'src/services/data.service';
import { Image } from 'src/app/models/data.models';


@Component({
  selector: 'app-homepage-hero',
  templateUrl: './homepage-hero.component.html',
  styleUrls: ['./homepage-hero.component.scss']
})
export class HomepageHeroComponent {

  constructor(private dataService: DataService) {}

  // Carousel Implementation

  carouselImages!: string | undefined; // CSS classes for background images
  // currentIndex: number = 0;
  // currentImage: string = this.carouselImages
  //   ? this.carouselImages[this.currentIndex]
  //   : '';

  interval: number = 3000; // Interval in milliseconds for carousel


  images: Image[] | undefined; // Add your image file names
  currentIndex: number = 0;
  currentImage!: Image;

  ngOnInit() {
    this.renderPageDetails('Landing Page');

    this.next();
    // Moving to next image after specified interval
    setInterval(() => {
      this.next();
      
    }, this.interval);
  }

  PageData!: PageResponse;

  renderPageDetails(pageType: string) {
    this.dataService
      .renderPage(pageType)
      .subscribe((response: PageResponse) => {
        this.PageData = response;
        console.log('PageData: ', this.PageData);

        this.images = response.result.pageSection.find(
          (section) => section.sectionType === 'Hero Section'
        )?.imagesObj;

        console.log('CarouselImages: ', this.images);
      });
  }

  next() {
    if (this.images && this.images.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
      // console.log(this.currentImage);
    }
  }

  // Making hero info available to edit later in CMS by giving it a model
  homepageHero: HomepageHero[] = [
    {tagText: 'Mojo', mainTitle: 'Trusted and Secured. Join Mojo now', subTitle: "Spend, save and manage your money, all in one place. Open an e-wallet from your phone, for free."}
  ]

}
