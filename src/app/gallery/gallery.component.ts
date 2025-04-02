import { NgFor, NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryPictureComponent } from './gallery-picture/gallery-picture.component';


@Component({
  selector: 'app-gallery',
  imports: [GalleryPictureComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {

  thursdayUrls = Array.from({length: 35}, (v, k) => `Gallery/Thursday/thumbnails/ColossalconCruise2025-${++k}.jpg`);
  fridayUrls = Array.from({length: 78}, (v, k) => `Gallery/Friday/thumbnails/ColossalconCruise2025-${++k}.jpg`);
  saturdayUrls = Array.from({length: 50}, (v, k) => `Gallery/Saturday/thumbnails/ColossalconCruise2025-${++k+170}.jpg`);
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }


}
