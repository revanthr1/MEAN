import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video'],
  outputs:['updateVideoEvent'],
})
export class VideoDetailComponent implements OnInit {


  private editTitle : boolean  = false;
  private updateVideoEvent = new EventEmitter();
  video: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }
   
  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }
  


}
