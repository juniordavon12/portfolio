import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../models/GalleryImage';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  @Input() images: GalleryImage[] = [];
  @Input() title: string = 'Ma Galerie';

  selectedImage: GalleryImage | null = null;
  isModalOpen = false;

  openModal(image: GalleryImage) {
    this.selectedImage = image;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Empêche le scroll
  }

  closeModal() {
    this.selectedImage = null;
    this.isModalOpen = false;
    document.body.style.overflow = 'auto'; // Réactive le scroll
  }

  nextImage() {
    if (!this.selectedImage) return;

    const currentIndex = this.images.findIndex((img) => img.id === this.selectedImage!.id);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[nextIndex];
  }

  previousImage() {
    if (!this.selectedImage) return;

    const currentIndex = this.images.findIndex((img) => img.id === this.selectedImage!.id);
    const previousIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
    this.selectedImage = this.images[previousIndex];
  }

  trackByImageId(index: number, image: GalleryImage): number {
    return image.id;
  }
}
