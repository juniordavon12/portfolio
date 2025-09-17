import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Skill } from '../models/Skill';
import { Job } from '../models/Job';
import { Certification } from '../models/Certification';
import { GalleryImage } from '../models/GalleryImage';

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  private readonly httpClient = inject(HttpClient);

  getSkills(): Observable<Skill[]> {
    return this.httpClient
      .get<{ skills: Skill[] }>('assets/data/metadata.json')
      .pipe(map((response) => response.skills));
  }

  getJobs(): Observable<Job[]> {
    return this.httpClient
      .get<{ jobs: Job[] }>('assets/data/metadata.json')
      .pipe(map((response) => response.jobs));
  }

  getCertifications(): Observable<Certification[]> {
    return this.httpClient
      .get<{ certifications: Certification[] }>('assets/data/metadata.json')
      .pipe(map((response) => response.certifications));
  }

  getGalleryImages(): Observable<GalleryImage[]> {
    return this.httpClient
      .get<{ images: GalleryImage[] }>('assets/data/metadata.json')
      .pipe(map((response) => response.images));
  }
}
