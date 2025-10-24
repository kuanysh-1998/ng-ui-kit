import {
  Component,
  computed,
  effect,
  input,
  OnDestroy,
  OnInit,
  signal,
  ViewEncapsulation,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { Slide } from "./swiper.types";

@Component({
  selector: "ng-swiper",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "swiper.component.html",
  styleUrls: ["swiper.component.scss"],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ng-swiper",
  },
})
export class SwiperComponent implements OnDestroy, OnInit {
  public slides = input.required<Slide[]>();
  public autoplayDelay = input<number>(3000);
  public autoplayEnabled = input<boolean>(false);

  public currentIndex = signal(0);

  protected isDragging = signal(false);
  protected startX = signal(0);
  protected currentTranslate = signal(0);
  protected previousTranslate = signal(0);
  protected isTransitioning = signal(false);

  protected translateX = computed(() => {
    const baseTranslate = -this.currentIndex() * this._getContainerWidth();
    return baseTranslate + this.currentTranslate();
  });

  protected extendedSlides = computed(() => {
    const original = this.slides();
    if (original.length === 0) return [];

    return [original[original.length - 1], ...original, original[0]];
  });

  private _autoplayInterval: number | null = null;
  private readonly _animationId: number | null = null;

  constructor() {
    effect(() => {
      if (this.autoplayEnabled() && this.autoplayDelay() > 0) {
        this._startAutoplay();
      }
    });

    effect(() => {
      if (this.slides().length > 0) {
        setTimeout(() => {
          this.currentIndex.set(1);
        }, 0);
      }
    });
  }

  public ngOnInit(): void {
    window.addEventListener("resize", () => {
      this.currentTranslate.set(1);
      setTimeout(() => {
        this.currentTranslate.set(0);
      });
    });
  }

  public ngOnDestroy(): void {
    this._stopAutoplay();
    if (this._animationId) {
      cancelAnimationFrame(this._animationId);
    }
  }

  public nextSlide(): void {
    if (this.isTransitioning()) return;

    this._stopAutoplay();
    this.isTransitioning.set(true);

    const newIndex = this.currentIndex() + 1;
    this.currentIndex.set(newIndex);

    if (newIndex === this.slides().length + 1) {
      setTimeout(() => {
        this.isTransitioning.set(false);
        this.currentIndex.set(1);
        setTimeout(() => this._startAutoplay(), 50);
      }, 300);
    } else {
      setTimeout(() => {
        this.isTransitioning.set(false);
        this._startAutoplay();
      }, 300);
    }
  }

  public previousSlide(): void {
    if (this.isTransitioning()) return;

    this._stopAutoplay();
    this.isTransitioning.set(true);

    const newIndex = this.currentIndex() - 1;
    this.currentIndex.set(newIndex);

    if (newIndex === 0) {
      setTimeout(() => {
        this.isTransitioning.set(false);
        this.currentIndex.set(this.slides().length);
        setTimeout(() => {
          this.isTransitioning.set(false);
          this._startAutoplay();
        }, 50);
      }, 300);
    } else {
      setTimeout(() => {
        this.isTransitioning.set(false);
        this._startAutoplay();
      }, 300);
    }
  }

  public goToSlide(index: number): void {
    if (this.isTransitioning()) return;

    this._stopAutoplay();
    this.isTransitioning.set(true);

    this.currentIndex.set(index + 1);
    this.currentTranslate.set(0);
    this.previousTranslate.set(0);

    setTimeout(() => {
      this.isTransitioning.set(false);
      this._startAutoplay();
    }, 300);
  }

  protected getRealIndex(): number {
    const idx = this.currentIndex();
    if (idx === 0) return this.slides().length - 1;
    if (idx === this.slides().length + 1) return 0;
    return idx - 1;
  }

  protected onDragStart(event: MouseEvent | TouchEvent): void {
    this._stopAutoplay();
    this.isDragging.set(true);
    const clientX = this._getPositionX(event);
    this.startX.set(clientX);
    this.previousTranslate.set(this.currentTranslate());

    if (this._animationId) {
      cancelAnimationFrame(this._animationId);
    }
  }

  protected onDragMove(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging()) return;

    event.preventDefault();
    const clientX = this._getPositionX(event);
    const diff = clientX - this.startX();
    this.currentTranslate.set(this.previousTranslate() + diff);
  }

  protected onDragEnd(): void {
    if (!this.isDragging()) return;

    this.isDragging.set(false);
    const movedBy = this.currentTranslate();
    const threshold = this._getContainerWidth() * 0.2;

    if (Math.abs(movedBy) > threshold) {
      if (movedBy > 0) {
        this.previousSlide();
      } else {
        this.nextSlide();
      }
    } else {
      this._startAutoplay();
    }

    this.currentTranslate.set(0);
    this.previousTranslate.set(0);
  }

  private _startAutoplay(): void {
    if (!this.autoplayEnabled() || this.autoplayDelay() <= 0) return;

    this._stopAutoplay();
    this._autoplayInterval = window.setInterval(() => {
      this.nextSlide();
    }, this.autoplayDelay());
  }

  private _stopAutoplay(): void {
    if (this._autoplayInterval) {
      clearInterval(this._autoplayInterval);
      this._autoplayInterval = null;
    }
  }

  private _getContainerWidth(): number {
    if (typeof window !== "undefined") {
      const container = document.querySelector(
        ".ng-swiper__container"
      ) as HTMLElement;
      return container?.offsetWidth || window.innerWidth;
    }
    return 1024;
  }

  private _getPositionX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
      ? event.clientX
      : event.touches[0].clientX;
  }
}
