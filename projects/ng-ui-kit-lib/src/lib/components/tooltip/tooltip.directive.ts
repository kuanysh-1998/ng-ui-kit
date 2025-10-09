import {
  ComponentRef,
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

import { TooltipComponent } from "./tooltip.component";
import { PopoverPosition } from "../../../utils/popover.types";

@Directive({
  selector: "[ngTooltip]",
  standalone: true,
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input("ngTooltip") public content!: string | TemplateRef<unknown>;
  @Input("ngTooltipPosition") public position: PopoverPosition = "top";

  private _tooltipComponentRef!: ComponentRef<TooltipComponent> | null;
  private _embeddedViewRef!: EmbeddedViewRef<unknown> | null;

  constructor(
    private readonly _templateRef: TemplateRef<unknown>,
    private readonly _viewContainerRef: ViewContainerRef
  ) {}

  public ngOnInit(): void {
    this._createTooltip(this.content);
  }

  public ngOnDestroy(): void {
    this._destroyTooltip();
  }

  private _createTooltip(content: string | TemplateRef<unknown>): void {
    this._destroyTooltip();

    this._embeddedViewRef = this._viewContainerRef.createEmbeddedView(
      this._templateRef
    );
    this._tooltipComponentRef =
      this._viewContainerRef.createComponent(TooltipComponent);

    this._tooltipComponentRef.instance.content = content;
    this._tooltipComponentRef.instance.position = this.position;
    this._tooltipComponentRef.instance.for = this._embeddedViewRef.rootNodes[0];
  }

  private _destroyTooltip(): void {
    if (this._tooltipComponentRef) {
      this._tooltipComponentRef.destroy();
      this._tooltipComponentRef = null;
    }
    if (this._embeddedViewRef) {
      this._embeddedViewRef.destroy();
      this._embeddedViewRef = null;
    }
  }
}
