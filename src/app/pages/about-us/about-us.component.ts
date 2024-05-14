import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  friendsLists = [
    {
      name: 'Karthy',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/karthy.jpg',
    },
    {
      name: 'Saravana',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/saravana.jpg',
    },
    {
      name: 'Sajeeth',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/sajeeth.jpg',
    },
    {
      name: 'Shaja',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/shaja.jpg',
    },
    {
      name: 'Abdul',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/abdul.jpg',
    },
    {
      name: 'Gnanajeyam',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/jeyam.jpg',
    },
    {
      name: 'Santhosh',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/sandy.jpg',
    },
    {
      name: 'Varun',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/varun.jpg',
    },
    {
      name: 'Hari',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/hari.jpg',
    },
    {
      name: 'Goutham',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/goutham.jpg',
    },
    {
      name: 'Guna',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/guna.jpg',
    },
    {
      name: 'Funny',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/funny.jpg',
    },
    {
      name: 'Vasanth',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/vasanth.jpg',
    },
    {
      name: 'Murli',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/murlee.jpg',
    },
    {
      name: 'Sudhan',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/sudhan.jpg',
    },
    {
      name: 'Madhan',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/madhan.jpg',
    },
    {
      name: 'Pradeep',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/pradeep.jpg',
    },
    {
      name: 'Babu',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/babu.jpg',
    },
    {
      name: 'Yugesh',
      instagram: 'https://www.instagram.com/member1/',
      imageSrc: 'assets/CC-members/yugesh.jpg',
    },
    {
      name: 'Arvind',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/arvind.jpg',
    },
    {
      name: 'Lokesh',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/lokesh.jpg',
    },
    {
      name: 'Sakthi',
      instagram: 'https://www.instagram.com/member2/',
      imageSrc: 'assets/CC-members/sakthi.jpg',
    },
  ];

  sortedFriendsList: { name: string; instagram: string; imageSrc: string }[];

  constructor() {
    this.sortedFriendsList = this.friendsLists
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
