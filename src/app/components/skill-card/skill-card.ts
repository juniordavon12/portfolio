import { Component, Input } from '@angular/core';
import { Skill } from '../../models/Skill';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCard {
  @Input() skill?: Skill;
}
