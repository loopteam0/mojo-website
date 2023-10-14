import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsCards } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-media-and-press',
  templateUrl: './media-and-press.component.html',
  styleUrls: ['./media-and-press.component.scss']
})
export class MediaAndPressComponent {

  constructor(private router: Router){}

  toBlog(){
    this.router.navigate(['/blog']);
  }

  mediaAndPress: NewsCards[] = [
    {newsImg: '/assets/images/news-img1.png', writerImg: '', writerName: '', newsDate: '11/09/2022', newsTitle: 'Digital wallets, a new way to bypass banks in Lebanon?', newsSubTitle: "Since mid-May, a small revolution has been taking place in Lebanon's digital wallet market, as the first steps towards synergy among", newsLink: 'https://today.lorientlejour.com/article/1339336/digital-wallets-a-new-way-to-bypass-banks-in-lebanon.html'},
    {newsImg: '/assets/images/news-img2.jpeg', writerImg: '', writerName: '', newsDate: '11/09/2022', newsTitle: 'Health Insurance Premiums for Students for Fall 2023', newsSubTitle: "Students enrolled in any university in Lebanon, are required by law to be covered by health insurance.", newsLink: 'https://today.lorientlejour.com/article/1339336/digital-wallets-a-new-way-to-bypass-banks-in-lebanon.html'}

  ]
}
