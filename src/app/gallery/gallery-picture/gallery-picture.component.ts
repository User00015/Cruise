import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'gallery-picture',
  imports: [NgOptimizedImage, ImageModule],
  templateUrl: './gallery-picture.component.html',
  styleUrl: './gallery-picture.component.scss'
})
export class GalleryPictureComponent {
  imgName = input<string>();
  sourceImgName = computed(() => this.imgName()?.replace("thumbnails/", ""))
}
