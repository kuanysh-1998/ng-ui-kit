import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";

import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button.component";
import { Icons } from "../svg/svg.config";

const meta: Meta<ButtonComponent> = {
  title: "Buttons/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  args: {
    label: "Печать",
    stylingMode: "contained",
    variant: "default",
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    label: {
      control: "text",
      description: "**@Input** label - Текст кнопки.",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: `${"Печать"}` },
      },
    },
    size: {
      control: "radio",
      options: ["xlarge", "large", "small", "default"],
      description: "**@Input** size - Размер кнопки.",
      table: {
        type: { summary: '"xlarge" | "large" | "small" | "default"' },
        defaultValue: { summary: `${"default"}` },
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
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "alternative",
        "success",
        "info",
        "warning",
        "danger",
        "help",
      ],
      description: "**@Input** variant - Вариант оформления кнопки.",
      table: {
        type: {
          summary:
            "'default' | 'secondary'  | 'alternative' | 'success' | 'info' | 'warning' | 'danger' | 'help'",
        },
        defaultValue: {
          summary: `${"default"}`,
        },
      },
    },
    stylingMode: {
      control: "radio",
      options: ["contained", "outlined", "ghost"],
      description: "**@Input** stylingMode - Стиль кнопки.",
      table: {
        type: { summary: "'contained' | 'outlined' | 'ghost'" },
        defaultValue: {
          summary: `${"contained"}`,
        },
      },
    },
    fullWidth: {
      control: "boolean",
      description:
        "**@Input** fullWidth - Определяет, должна ли кнопка быть на всю ширину.",
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: `${false}`,
        },
      },
    },
    isIcon: {
      control: "boolean",
      description:
        "**@Input** isIcon - Флаг, определяющий, является ли кнопка иконкой (Например если вместо иконки цифра или спецсимвол).",
      table: {
        type: { summary: "boolean | undefined" },
        defaultValue: { summary: `${false}` },
      },
    },
    icon: {
      control: "select",
      options: [null, ...Object.values(Icons)],
      description: "**@Input** icon - Иконка слева от текста.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: `${undefined}` },
      },
    },
    rightIcon: {
      control: "select",
      options: [null, ...Object.values(Icons)],
      description: "**@Input** iconRight - Иконка справа от текста.",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: `${undefined}`,
        },
      },
    },

    disabled: {
      control: "boolean",
      description: "**@Input** disabled - Флаг неактивности кнопки.",
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: `${false}`,
        },
      },
    },
    clicked: {
      description:
        "**@Output** clicked - Событие, вызываемое при клике на кнопку.",
      action: "clicked",
    },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const AllButtons = (args: object): unknown => {
  const items = [
    "default",
    "secondary",
    "alternative",
    "success",
    "info",
    "warning",
    "danger",
    "help",
  ];

  return {
    template: `
      <div style="display:flex; flex-direction: column; gap: 50px">
        <div>
          <div *ngFor="let item of currentItems" style="display: flex; gap: 8px; margin-bottom: 12px;">
           <ng-button size="large" [variant]="item" [label]="item"></ng-button>
              <ng-button [variant]="item" [label]="item"></ng-button>
              <ng-button size="small" [variant]="item" [label]="item"></ng-button>
              <ng-button size="large" stylingMode="outlined" [variant]="item" [label]="item"></ng-button>
              <ng-button stylingMode="outlined" [variant]="item" [label]="item"></ng-button>
              <ng-button size="small" stylingMode="outlined" [variant]="item" [label]="item"></ng-button>
              <ng-button size="large" stylingMode="tinted" [variant]="item" [label]="item"></ng-button>
              <ng-button stylingMode="tinted" [variant]="item" [label]="item"></ng-button>
              <ng-button size="small" stylingMode="tinted" [variant]="item" [label]="item"></ng-button>
              <ng-button size="large" stylingMode="ghost" [variant]="item" [label]="item"></ng-button>
              <ng-button stylingMode="ghost" [variant]="item" [label]="item"></ng-button>
              <ng-button size="small" stylingMode="ghost" [variant]="item" [label]="item"></ng-button>


          </div>
        </div>


        <div>
          <div *ngFor="let item of currentItems" style="display: flex; gap: 8px; margin-bottom: 12px;">
              <ng-button [icon]="icon" [variant]="item" [label]="item"></ng-button>
              <ng-button size="small" [icon]="icon" [variant]="item" [label]="item"></ng-button>
              <ng-button [icon]="icon" stylingMode="outlined" [variant]="item" [label]="item"></ng-button>
              <ng-button size="small" [icon]="icon" stylingMode="outlined" [variant]="item" [label]="item"></ng-button>
              <ng-button [icon]="icon" stylingMode="tinted" [variant]="item" [label]="item"></ng-button>
              <ng-button size="small" [icon]="icon" stylingMode="tinted" [variant]="item" [label]="item"></ng-button>
              <ng-button [icon]="icon" stylingMode="ghost" [variant]="item" [label]="item"></ng-button>
              <ng-button size="small" [icon]="icon" stylingMode="ghost" [variant]="item" [label]="item"></ng-button>
          </div>
        </div>


        <div>
           <div *ngFor="let item of currentItems" style="display: flex; gap: 8px; margin-bottom: 12px;">
                <ng-button [icon]="icon" [variant]="item"></ng-button>
                <ng-button size="small" [icon]="icon" [variant]="item"></ng-button>
                <ng-button [icon]="icon" stylingMode="outlined" [variant]="item"></ng-button>
                <ng-button size="small" [icon]="icon" stylingMode="outlined" [variant]="item"></ng-button>
                <ng-button [icon]="icon" stylingMode="tinted" [variant]="item"></ng-button>
                <ng-button size="small" [icon]="icon" stylingMode="tinted" [variant]="item"></ng-button>
                <ng-button [icon]="icon" stylingMode="ghost" [variant]="item"></ng-button>
                <ng-button size="small" [icon]="icon" stylingMode="ghost" [variant]="item"></ng-button>
            </div>
        </div>
      </div>
  `,
    props: {
      ...args,
      icon: Icons.Spinner,
      currentItems: items,
    },
  };
};
