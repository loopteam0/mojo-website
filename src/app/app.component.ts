import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MojoWebsite';

  @ViewChild('videoPlayer', {static: true}) videoPlayer!: ElementRef<HTMLVideoElement>;
  

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }


  // isPlaying = false;

  // onVideoEnded(videoElement: HTMLVideoElement): void {
  //   videoElement.currentTime = 0;  // Reset the video to the beginning
  //   this.isPlaying = false;        // Update the state
  // }

  // togglePlayPause(videoElement: HTMLVideoElement): void {
  //   if (this.isPlaying) {
  //     videoElement.pause();
  //   } else {
  //     videoElement.play();
  //   }
  //   this.isPlaying = !this.isPlaying; // Toggle the play state
  // }

  ngOnInit(): void {
    // this.videoPlayer.nativeElement.muted
    // this.videoPlayer.nativeElement.play();
  }

  ngAfterViewInit(): void {
    this.tryPlayVideo();
  }

  tryPlayVideo(): void {
    const videoElement = this.videoPlayer.nativeElement;

    videoElement.muted = true;

    videoElement.play().catch(error => {
      console.error("eRROR PLAYING VIDEO", error);
      setTimeout(() => 
        this.tryPlayVideo(), 2000);
    });
  }

  
  
}
