import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = ''
  imgDefault: string = ''
  constructor() { }

  ngOnInit(): void {

  }

  onError() {
    this.img = this.imgDefault
  }
}
