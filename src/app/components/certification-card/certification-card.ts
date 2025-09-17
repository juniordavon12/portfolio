import { Component, Input } from '@angular/core';
import { Certification } from '../../models/Certification';

@Component({
  selector: 'app-certification-card',
  imports: [],
  templateUrl: './certification-card.html',
  styleUrl: './certification-card.scss',
})
export class CertificationCard {
  @Input() certification!: Certification;
  imageError = false;
}
