import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { TooltipComponent } from "./tooltip.component";
import { ButtonComponent } from "../button/button.component";
import { TooltipDirective } from "./tooltip.directive";

const meta: Meta<TooltipComponent> = {
  title: "Components/Tooltip",
  component: TooltipComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, TooltipDirective],
    }),
  ],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "Содержимое tooltip (текст или TemplateRef)",
    },
    for: {
      control: { type: "text" },
      description: "ID элемента или сам элемент для привязки tooltip",
    },
    position: {
      control: { type: "select" },
      options: [
        "top left",
        "top",
        "top right",
        "bottom left",
        "bottom",
        "bottom right",
        "left top",
        "left",
        "left bottom",
        "right top",
        "right",
        "right bottom",
      ],
    },
    manualControl: {
      control: { type: "boolean" },
      description: "Ручное управление показом/скрытием",
    },
    shakeAnimation: {
      control: { type: "boolean" },
      description: "Анимация тряски при наведении",
    },
    maxWidth: {
      control: { type: "number" },
      description: "Максимальная ширина tooltip в пикселях",
    },
    onHover: {
      control: { type: "boolean" },
      description: "Показывать при наведении мыши",
    },
    offset: {
      control: { type: "number" },
      description: "Отступ от целевого элемента",
    },
    hideOnOutsideClick: {
      control: { type: "boolean" },
      description: "Скрывать при клике вне tooltip",
    },
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

export const Default: Story = {
  args: {
    content: "Это простой tooltip с текстом",
    for: "tooltip-target-1",
    position: "top",
    manualControl: false,
    shakeAnimation: false,
    maxWidth: 200,
    onHover: true,
    offset: 8,
    hideOnOutsideClick: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 50px; text-align: center;">
        <ng-button 
          id="tooltip-target-1" 
          size="medium"
          label="Наведи на меня">
        </ng-button>
        <ng-tooltip 
          [content]="content" 
          [for]="for" 
          [position]="position"
          [manualControl]="manualControl"
          [shakeAnimation]="shakeAnimation"
          [maxWidth]="maxWidth"
          [onHover]="onHover"
          [offset]="offset"
          [hideOnOutsideClick]="hideOnOutsideClick">
        </ng-tooltip>
      </div>
    `,
  }),
};

export const DifferentPositions: Story = {
  render: () => ({
    template: `
      <div style="padding: 100px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 50px; text-align: center;">
        <!-- Top positions -->
        <div>
          <ng-button id="tooltip-top-left" variant="success" size="small" label="Top Left">
          </ng-button>
          <ng-tooltip content="Tooltip сверху слева" for="tooltip-top-left" position="top left"></ng-tooltip>
        </div>
        
        <div>
          <ng-button id="tooltip-top" variant="success" size="small" label="Top Center">
          </ng-button>
          <ng-tooltip content="Tooltip сверху по центру" for="tooltip-top" position="top"></ng-tooltip>
        </div>
        
        <div>
          <ng-button id="tooltip-top-right" variant="success" size="small" label="Top Right">
          </ng-button>
          <ng-tooltip content="Tooltip сверху справа" for="tooltip-top-right" position="top right"></ng-tooltip>
        </div>
        
        <!-- Bottom positions -->
        <div>
          <ng-button id="tooltip-bottom-left" variant="danger" size="small" label="Bottom Left">
          </ng-button>
          <ng-tooltip content="Tooltip снизу слева" for="tooltip-bottom-left" position="bottom left"></ng-tooltip>
        </div>
        
        <div>
          <ng-button id="tooltip-bottom" variant="danger" size="small" label="Bottom Center">
          </ng-button>
          <ng-tooltip content="Tooltip снизу по центру" for="tooltip-bottom" position="bottom"></ng-tooltip>
        </div>
        
        <div>
          <ng-button id="tooltip-bottom-right" variant="danger" size="small" label="Bottom Right">
          </ng-button>
          <ng-tooltip content="Tooltip снизу справа" for="tooltip-bottom-right" position="bottom right"></ng-tooltip>
        </div>
        
        <!-- Left positions -->
        <div>
          <ng-button id="tooltip-left-top" variant="secondary" size="small" label="Left Top">
          </ng-button>
          <ng-tooltip content="Tooltip слева сверху" for="tooltip-left-top" position="left top"></ng-tooltip>
        </div>
        
        <div>
          <ng-button id="tooltip-left" variant="secondary" size="small" label="Left Center">
          </ng-button>
          <ng-tooltip content="Tooltip слева по центру" for="tooltip-left" position="left"></ng-tooltip>
        </div>
        
        <div>
          <ng-button id="tooltip-left-bottom" variant="secondary" size="small" label="Left Bottom">
          </ng-button>
          <ng-tooltip content="Tooltip слева снизу" for="tooltip-left-bottom" position="left bottom"></ng-tooltip>
        </div>
      </div>
    `,
  }),
};

export const LongContent: Story = {
  args: {
    content:
      "Это очень длинный текст tooltip, который должен переноситься на несколько строк и показывать, как компонент обрабатывает длинный контент. Максимальная ширина ограничена параметром maxWidth.",
    for: "tooltip-long-content",
    position: "top",
    maxWidth: 300,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 50px; text-align: center;">
        <ng-button 
          id="tooltip-long-content" 
          variant="warning"
          size="medium"
          label="Длинный контент">
        </ng-button>
        <ng-tooltip 
          [content]="content" 
          [for]="for" 
          [position]="position"
          [maxWidth]="maxWidth">
        </ng-tooltip>
      </div>
    `,
  }),
};

export const ManualControl: Story = {
  args: {
    content: "Tooltip с ручным управлением",
    for: "tooltip-manual",
    position: "top",
    manualControl: true,
    onHover: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 50px; text-align: center;">
        <ng-button 
          id="tooltip-manual" 
          variant="danger"
          size="medium"
          label="Ручное управление">
        </ng-button>
        <ng-tooltip 
          [content]="content" 
          [for]="for" 
          [position]="position"
          [manualControl]="manualControl"
          [onHover]="onHover">
        </ng-tooltip>
        <div style="margin-top: 20px;">
          <ng-button 
            (click)="toggleTooltip()"
            variant="secondary"
            size="small"
            label="Переключить Tooltip">
          </ng-button>
        </div>
      </div>
    `,
    methods: {
      toggleTooltip() {
        // Этот метод будет доступен в stories
        console.log("Toggle tooltip");
      },
    },
  }),
};

export const ShakeAnimation: Story = {
  args: {
    content: "Tooltip с анимацией тряски",
    for: "tooltip-shake",
    position: "top",
    shakeAnimation: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 50px; text-align: center;">
        <ng-button 
          id="tooltip-shake" 
          variant="secondary"
          size="medium"
          label="Анимация тряски">
        </ng-button>
        <ng-tooltip 
          [content]="content" 
          [for]="for" 
          [position]="position"
          [shakeAnimation]="shakeAnimation">
        </ng-tooltip>
      </div>
    `,
  }),
};

export const CustomOffset: Story = {
  render: () => ({
    template: `
      <div style="padding: 50px; text-align: center;">
        <div style="display: flex; gap: 30px; justify-content: center; align-items: center;">
          <div>
            <ng-button id="tooltip-offset-small" variant="success" size="small" label="Маленький отступ">
            </ng-button>
            <ng-tooltip content="Отступ: 4px" for="tooltip-offset-small" position="top" [offset]="4"></ng-tooltip>
          </div>
          
          <div>
            <ng-button id="tooltip-offset-medium" variant="success" size="small" label="Средний отступ">
            </ng-button>
            <ng-tooltip content="Отступ: 12px" for="tooltip-offset-medium" position="top" [offset]="12"></ng-tooltip>
          </div>
          
          <div>
            <ng-button id="tooltip-offset-large" variant="success" size="small" label="Большой отступ">
            </ng-button>
            <ng-tooltip content="Отступ: 20px" for="tooltip-offset-large" position="top" [offset]="20"></ng-tooltip>
          </div>
        </div>
      </div>
    `,
  }),
};

export const InteractiveExample: Story = {
  render: () => ({
    template: `
      <div style="padding: 50px;">
        <h3 style="text-align: center; margin-bottom: 30px;">Интерактивный пример</h3>
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
          <div>
            <ng-button id="tooltip-info" variant="primary" size="medium" label="ℹ️ Информация">
            </ng-button>
            <ng-tooltip content="Это информационный tooltip с полезными подсказками" for="tooltip-info" position="top"></ng-tooltip>
          </div>
          
          <div>
            <ng-button id="tooltip-warning" variant="warning" size="medium" label="⚠️ Предупреждение">
            </ng-button>
            <ng-tooltip content="Внимание! Это предупреждающий tooltip" for="tooltip-warning" position="top"></ng-tooltip>
          </div>
          
          <div>
            <ng-button id="tooltip-error" variant="danger" size="medium" label="❌ Ошибка">
            </ng-button>
            <ng-tooltip content="Ошибка! Что-то пошло не так" for="tooltip-error" position="top"></ng-tooltip>
          </div>
          
          <div>
            <ng-button id="tooltip-success" variant="success" size="medium" label="✅ Успех">
            </ng-button>
            <ng-tooltip content="Отлично! Операция выполнена успешно" for="tooltip-success" position="top"></ng-tooltip>
          </div>
        </div>
      </div>
    `,
  }),
};

// Story для директивы
export const DirectiveExample: Story = {
  render: () => ({
    template: `
      <div style="padding: 50px; text-align: center;">
        <h3>Примеры использования TooltipDirective</h3>
        <p>Директива позволяет легко добавлять tooltip к любому элементу</p>
        
        <div style="display: flex; gap: 20px; justify-content: center; margin-top: 30px;">
          <ng-button 
            *ngTooltip="'Это tooltip через директиву!'; position: 'top'"
            variant="primary"
            size="medium"
            label="Наведи на меня">
          </ng-button>
          
          <ng-button 
            *ngTooltip="'Tooltip справа'; position: 'right'"
            variant="secondary"
            size="medium"
            label="Справа">
          </ng-button>
          
          <ng-button 
            *ngTooltip="'Tooltip снизу'; position: 'bottom'"
            variant="success"
            size="medium"
            label="Снизу">
          </ng-button>
          
          <ng-button 
            *ngTooltip="'Tooltip слева'; position: 'left'"
            variant="warning"
            size="medium"
            label="Слева">
          </ng-button>
        </div>
        
        <div style="margin-top: 30px;">
          <p>Также можно использовать с обычными HTML элементами:</p>
          <div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px;">
            <span 
              *ngTooltip="'Это span с tooltip'; position: 'top'"
              style="padding: 10px; background: #f0f0f0; border-radius: 4px; cursor: pointer;">
              Span элемент
            </span>
            
            <div 
              *ngTooltip="'Это div с tooltip'; position: 'bottom'"
              style="padding: 10px; background: #e0e0e0; border-radius: 4px; cursor: pointer;">
              Div элемент
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
