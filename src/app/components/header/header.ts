import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { SkillBar } from '../skill-bar/skill-bar';
@Component({
  selector: 'app-header',
  imports: [SkillBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  ngOnInit(): void {
    // gsap.to('.box', {
    //   x: 200,
    // });
  }
}
