import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WodService } from '../../core/services/wod.service';
import { TvAutoScaleDirective } from '../../core/directives/tv-auto-scale.directive';

@Component({
  selector: 'app-wod-slide',
  standalone: true,
  imports: [CommonModule, TvAutoScaleDirective],
  template: `
    <div class="content-wrapper" appTvAutoScale [isRotatedMode]="true" 
         [ngClass]="{'hidden': wodService.isFullViewMode(), 'animating': wodService.isAnimatingSlide()}">
      <h3>{{ wodService.currentSlide().titulo }}</h3>
      <p [innerHTML]="wodService.formatMarkdownText(wodService.currentSlide().contenido)"></p>
    </div>
  `,
  styles: [`
    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: auto;
      max-width: 100%;
      margin: 0 auto;
      transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 1;
      transform: scale(1);
    }

    .content-wrapper.animating {
      opacity: 0.15;
      transform: scale(0.97);
    }

    .content-wrapper.hidden {
      display: none !important;
    }

    .content-wrapper h3 {
      font-size: 4.8em;
      color: #00A3FF;
      margin-bottom: 0.3em;
      text-transform: uppercase;
      border-bottom: 4px solid rgba(0, 163, 255, 0.4);
      display: inline-block;
      text-shadow: 0px 0px 22px rgba(0, 163, 255, 0.7);
    }

    .content-wrapper p {
      font-size: 3.8em;
      line-height: 1.2;
      color: #fff;
      white-space: pre-wrap;
      font-weight: 400;
      width: 100%;
      text-align: left;
      padding: 0 40px;
      margin: 0;
      word-wrap: break-word;
    }

    :host ::ng-deep strong {
      font-weight: 900;
      color: #ffffff;
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
    }

    :host ::ng-deep u {
      text-decoration: underline;
      text-underline-offset: 4px;
      color: #fff;
    }

    :host ::ng-deep .highlight-weight {
      color: #FFE600;
      font-weight: 800;
      text-shadow: 0 0 12px rgba(255, 230, 0, 0.5);
    }

    :host ::ng-deep .highlight-rounds {
      color: #D0EFFF;
      font-weight: 800;
      text-shadow: 0 0 10px rgba(0, 163, 255, 0.35);
    }
  `]
})
export class WodSlideComponent {
  public wodService = inject(WodService);
}
