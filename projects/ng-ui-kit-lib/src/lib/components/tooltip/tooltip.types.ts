export type TooltipSettings = {
  manualControl: boolean;
  shakeAnimation: boolean;
  maxWidth: number;
  onHover: boolean;
  offset: number;
  hideOnOutsideClick: ((event: any) => boolean) | boolean;
};
