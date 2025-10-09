export type VariantButton =
  | "default"
  | "secondary"
  | "alternative"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "help";

export type StilingModeButton = "contained" | "outlined" | "ghost";

export type ButtonSettings = {
  label: string | number;
  variant: VariantButton;
  stylingMode: StilingModeButton;
  fullWidth: boolean;
  fullHeight: boolean;
  disabled: boolean;
  isIcon: boolean;
  icon: string | undefined;
  rightIcon: string | undefined;
  token: string | undefined;
  size: "large" | "small" | "default" | "xlarge";
  clickOnEnterEnabled: boolean;
};
