import type { Meta, StoryObj } from "@storybook/angular";
import { SvgComponent } from "./svg.component";
import { Icons } from "./svg.config";

const meta: Meta<SvgComponent> = {
  title: "Components/Svg",
  component: SvgComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "select" },
      options: Object.values(Icons),
    },
    basePath: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
    color: {
      control: { type: "color" },
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    ariaLabel: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<SvgComponent>;

export const Default: Story = {
  args: {
    icon: Icons.Spinner,
    size: "default",
    color: "#000000",
    basePath: "assets/svg",
    ariaLabel: "Иконка загрузки",
  },
  render: (args) => ({
    props: args,
    template: `
      <ng-svg 
        [icon]="icon" 
        [size]="size" 
        [color]="color" 
        [basePath]="basePath"
        [ariaLabel]="ariaLabel">
      </ng-svg>
    `,
  }),
};

export const Small: Story = {
  args: {
    icon: Icons.Spinner,
    size: "small",
    color: "#28a745",
    basePath: "assets/svg",
    ariaLabel: "Успех",
  },
  render: (args) => ({
    props: args,
    template: `
      <ng-svg 
        [icon]="icon" 
        [size]="size" 
        [color]="color" 
        [basePath]="basePath"
        [ariaLabel]="ariaLabel">
      </ng-svg>
    `,
  }),
};

export const Large: Story = {
  args: {
    icon: Icons.Spinner,
    size: "large",
    color: "#dc3545",
    basePath: "assets/svg",
    ariaLabel: "Ошибка",
  },
  render: (args) => ({
    props: args,
    template: `
      <ng-svg 
        [icon]="icon" 
        [size]="size" 
        [color]="color" 
        [basePath]="basePath"
        [ariaLabel]="ariaLabel">
      </ng-svg>
    `,
  }),
};

export const CustomSize: Story = {
  args: {
    icon: Icons.Spinner,
    width: "4rem",
    height: "2rem",
    color: "#17a2b8",
    basePath: "assets/svg",
    ariaLabel: "Информация",
  },
  render: (args) => ({
    props: args,
    template: `
      <ng-svg 
        [icon]="icon" 
        [width]="width" 
        [height]="height" 
        [color]="color" 
        [basePath]="basePath"
        [ariaLabel]="ariaLabel">
      </ng-svg>
    `,
  }),
};
