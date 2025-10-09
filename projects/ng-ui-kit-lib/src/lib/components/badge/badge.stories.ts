import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";

import { CommonModule } from "@angular/common";
import { BadgeComponent } from "./badge.component";
import { Icons } from "../svg/svg.config";

const meta: Meta<BadgeComponent> = {
  title: "Components/Badge",
  component: BadgeComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  args: {
    text: "Badge",
    size: "medium",
    stylingMode: "contained",
    variant: "default",
    asIcon: false,
    iconClickable: false,
    iconRightClickable: false,
    enableTooltip: true,
    tooltipPosition: "top",
  },
  argTypes: {
    text: {
      control: "text",
      description: "**@Input** text - Текст бейджа.",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: `""` },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "**@Input** size - Размер бейджа.",
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: `"medium"` },
      },
    },
    stylingMode: {
      control: "radio",
      options: ["contained", "outlined", "ghost"],
      description: "**@Input** stylingMode - Стиль бейджа.",
      table: {
        type: { summary: '"contained" | "outlined" | "ghost"' },
        defaultValue: { summary: `"contained"` },
      },
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "warning", "error", "success"],
      description: "**@Input** variant - Вариант оформления бейджа.",
      table: {
        type: {
          summary: '"default" | "secondary" | "warning" | "error" | "success"',
        },
        defaultValue: {
          summary: `"default"`,
        },
      },
    },
    asIcon: {
      control: "boolean",
      description:
        "**@Input** asIcon - Флаг, определяющий, является ли бейдж иконкой.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: `${false}` },
      },
    },
    iconClickable: {
      control: "boolean",
      description:
        "**@Input** iconClickable - Флаг, определяющий, кликабельна ли левая иконка.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: `${false}` },
      },
    },
    iconRightClickable: {
      control: "boolean",
      description:
        "**@Input** iconRightClickable - Флаг, определяющий, кликабельна ли правая иконка.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: `${false}` },
      },
    },
    enableTooltip: {
      control: "boolean",
      description:
        "**@Input** enableTooltip - Флаг, определяющий, включен ли тултип.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: `${true}` },
      },
    },
    tooltipPosition: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "**@Input** tooltipPosition - Позиция тултипа.",
      table: {
        type: { summary: '"top" | "bottom" | "left" | "right"' },
        defaultValue: { summary: `"top"` },
      },
    },
    icon: {
      control: "select",
      options: [null, ...Object.values(Icons)],
      description: "**@Input** icon - Иконка слева от текста.",
      table: {
        type: { summary: "string | undefined" },
        defaultValue: { summary: `${undefined}` },
      },
    },
    iconRight: {
      control: "select",
      options: [null, ...Object.values(Icons)],
      description: "**@Input** iconRight - Иконка справа от текста.",
      table: {
        type: { summary: "string | undefined" },
        defaultValue: { summary: `${undefined}` },
      },
    },
    token: {
      control: "text",
      description: "**@Input** token - Токен для идентификации.",
      table: {
        type: { summary: "string | undefined" },
        defaultValue: { summary: `${undefined}` },
      },
    },
    clickedIcon: {
      description:
        "**@Output** clickedIcon - Событие, вызываемое при клике на левую иконку.",
      action: "clickedIcon",
    },
    clickedIconRight: {
      description:
        "**@Output** clickedIconRight - Событие, вызываемое при клике на правую иконку.",
      action: "clickedIconRight",
    },
  },
};

export default meta;

type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {},
};

export const WithIcon: Story = {
  args: {
    text: "With Icon",
    icon: Icons.Spinner as any,
  },
};

export const WithRightIcon: Story = {
  args: {
    text: "With Right Icon",
    iconRight: Icons.Spinner as any,
  },
};

export const WithBothIcons: Story = {
  args: {
    text: "Both Icons",
    icon: Icons.Spinner as any,
    iconRight: Icons.Spinner as any,
  },
};

export const IconOnly: Story = {
  args: {
    icon: Icons.Spinner as any,
    asIcon: true,
  },
};

export const ClickableIcons: Story = {
  args: {
    text: "Clickable Icons",
    icon: Icons.Spinner as any,
    iconRight: Icons.Spinner as any,
    iconClickable: true,
    iconRightClickable: true,
  },
};

export const LongText: Story = {
  args: {
    text: "This is a very long text that should trigger tooltip functionality when enabled",
    enableTooltip: true,
  },
};

export const AllVariants = (args: object): unknown => {
  const variants = ["default", "secondary", "warning", "error", "success"];
  const sizes = ["small", "medium", "large"];
  const stylingModes = ["contained", "outlined", "ghost"];

  return {
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h3>Все варианты (contained)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <ng-badge 
              *ngFor="let variant of variants" 
              [variant]="variant" 
              [text]="variant"
              stylingMode="contained">
            </ng-badge>
          </div>
        </div>

        <div>
          <h3>Все размеры</h3>
          <div style="display: flex; align-items: center; gap: 8px;">
            <ng-badge 
              *ngFor="let size of sizes" 
              [size]="size" 
              text="Size"
              variant="default"
              stylingMode="contained">
            </ng-badge>
          </div>
        </div>

        <div>
          <h3>Все стили</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <ng-badge 
              *ngFor="let mode of stylingModes" 
              [stylingMode]="mode" 
              text="Style"
              variant="default">
            </ng-badge>
          </div>
        </div>

        <div>
          <h3>С иконками</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <ng-badge text="Left Icon" [icon]="icon" variant="default"></ng-badge>
            <ng-badge text="Right Icon" [iconRight]="icon" variant="secondary"></ng-badge>
            <ng-badge text="Both Icons" [icon]="icon" [iconRight]="icon" variant="warning"></ng-badge>
            <ng-badge [icon]="icon" variant="error" asIcon="true"></ng-badge>
          </div>
        </div>

        <div>
          <h3>Кликабельные иконки</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <ng-badge 
              text="Clickable Left" 
              [icon]="icon" 
              variant="success"
              [iconClickable]="true"
              (clickedIcon)="onIconClick()">
            </ng-badge>
            <ng-badge 
              text="Clickable Right" 
              [iconRight]="icon" 
              variant="default"
              [iconRightClickable]="true"
              (clickedIconRight)="onIconRightClick()">
            </ng-badge>
          </div>
        </div>
      </div>
    `,
    props: {
      ...args,
      variants,
      sizes,
      stylingModes,
      icon: Icons.Spinner as any,
      onIconClick: () => console.log("Left icon clicked"),
      onIconRightClick: () => console.log("Right icon clicked"),
    },
  };
};

export const AllSizes = (args: object): unknown => {
  const variants = ["default", "secondary", "warning", "error", "success"];
  const sizes = ["small", "medium", "large"];

  return {
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div *ngFor="let size of sizes">
          <h3>{{ size | titlecase }} Size</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <ng-badge 
              *ngFor="let variant of variants" 
              [size]="size"
              [variant]="variant" 
              [text]="variant"
              stylingMode="contained">
            </ng-badge>
          </div>
        </div>
      </div>
    `,
    props: {
      ...args,
      variants,
      sizes,
    },
  };
};
