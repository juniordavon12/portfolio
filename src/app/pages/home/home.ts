import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Header } from '../../components/header/header';
import { AboutMe } from '../../components/about-me/about-me';
import { Skill } from '../../models/Skill';
import { MetadataService } from '../../services/metadata.service';
import { SkillCard } from '../../components/skill-card/skill-card';
import { Job } from '../../models/Job';
import { CertificationCard } from '../../components/certification-card/certification-card';
import { Certification } from '../../models/Certification';
import { GalleryImage } from '../../models/GalleryImage';
import { Gallery } from '../../components/gallery/gallery';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Navbar, Header, AboutMe, SkillCard, CertificationCard, Gallery],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  private readonly metadataService = inject(MetadataService);
  skills = signal<Skill[]>([]);
  jobs = signal<Job[]>([]);
  certifications = signal<Certification[]>([]);
  galleryImages = signal<GalleryImage[]>([]);

  ngOnInit() {
    this.getSkills();
    this.getJobs();
    this.gtCertifications();
    this.getGalleryImages();
  }

  getSkills() {
    this.metadataService.getSkills().subscribe((data) => {
      this.skills.set(data);
    });
  }

  getJobs() {
    this.metadataService.getJobs().subscribe((data) => {
      this.jobs.set(data);
    });
  }

  gtCertifications() {
    this.metadataService.getCertifications().subscribe((data) => {
      this.certifications.set(data);
    });
  }
  getGalleryImages() {
    this.metadataService.getGalleryImages().subscribe((data) => {
      console.log('galleryImages', data);
      this.galleryImages.set(data);
    });
  }
}
