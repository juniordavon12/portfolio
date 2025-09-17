import { Component } from '@angular/core';
import { LucideAngularModule, PanelTopIcon, TabletSmartphoneIcon, CloudIcon } from 'lucide-angular';

@Component({
  selector: 'app-about-me',
  imports: [LucideAngularModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  readonly PanelTopIcon = PanelTopIcon;
  readonly TabletSmartphoneIcon = TabletSmartphoneIcon;
  readonly CloudIcon = CloudIcon;
}
