import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from "@angular/core";
import { SvgComponent } from "../svg/svg.component";

@Component({
  selector: "ng-button",
  imports: [CommonModule, SvgComponent],
  templateUrl: "./button.component.html",
  styleUrls: ["./styles/button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public active = false;
  @Input() height?: string;
  @Input() width?: string;
  @Input() public label = "";
  @Input() public variant = "default";
  @Input() public stylingMode = "contained";
  @Input() public fullWidth = false;
  @Input() public fullHeight = false;
  @Input() public disabled = false;
  @Input() public isIcon = false;

  @Input() public icon = undefined;
  @Input() public rightIcon = undefined;
  @Input() public token = undefined;
  @Input() public size = "default";
  @Input() iconWidth?: string;
  @Input() iconHeight?: string;

  @Input() public clickOnEnterEnabled = true;

  @Output() public clicked = new EventEmitter<PointerEvent | MouseEvent>();

  @HostBinding("style.width")
  protected get widthStyle(): string | null {
    if (this.fullWidth) return "100%";
    if (this.width) return this.width;
    return null;
  }

  protected get isIconButton(): boolean {
    return (
      this.isIcon ||
      (!!this.icon && !this.label && !this.rightIcon) ||
      (!!this.rightIcon && !this.label && !this.icon) ||
      typeof this.label === "number"
    );
  }

  protected get buttonClasses(): Record<string, boolean> {
    return {
      [`ng-button__container_${this.variant}`]: true,
      [`ng-button__container_full-width`]: this.fullWidth,
      [`ng-button__container_full-height`]: this.fullHeight,
      [`ng-button__container_${this.stylingMode}`]: true,
      [`ng-button__container_size-${this.size}`]: true,
      ["ng-button__container_with-icon"]: !!this.icon || !!this.rightIcon,
      ["ng-button__container_without-label"]: !this.label,
      ["ng-button__container_without-focus"]: !this.clickOnEnterEnabled,
      ["ng-button__container_icon-button"]: this.isIconButton,
      ["ng-button__container_disabled"]: this.disabled,
      ["ng-button__container_override"]: this.disabled,
      ["ng-button__container_active"]: this.active,
    };
  }

  protected click(event: PointerEvent | MouseEvent): void {
    if (this.disabled) return;
    this.clicked.emit(event);
  }

  protected preventEnterKey(event: KeyboardEvent): void {
    if (event.key === "Enter" && !this.clickOnEnterEnabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
