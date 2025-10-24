import type { Meta, StoryObj } from "@storybook/angular";
import { SwiperComponent } from "./swiper.component";
import { Slide } from "./swiper.types";

const meta: Meta<SwiperComponent> = {
  title: "Components/Swiper",
  component: SwiperComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Компонент слайдера с поддержкой автопрокрутки, перетаскивания и навигации по точкам.",
      },
    },
  },
  argTypes: {
    slides: {
      control: "object",
      description: "Массив слайдов для отображения",
    },
    autoplayDelay: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Задержка автопрокрутки в миллисекундах",
    },
    autoplayEnabled: {
      control: "boolean",
      description: "Включить автопрокрутку",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<SwiperComponent>;

// Примеры изображений для демонстрации
const sampleSlides: Slide[] = [
  {
    image: "https://picsum.photos/800/400?random=1",
    alt: "Красивый пейзаж с горами",
  },
  {
    image: "https://picsum.photos/800/400?random=2",
    alt: "Городской вид ночью",
  },
  {
    image: "https://picsum.photos/800/400?random=3",
    alt: "Море и закат",
  },
  {
    image: "https://picsum.photos/800/400?random=4",
    alt: "Лесная тропа",
  },
  {
    image: "https://picsum.photos/800/400?random=5",
    alt: "Архитектурное здание",
  },
];

const fewSlides: Slide[] = [
  {
    image: "https://picsum.photos/800/400?random=6",
    alt: "Первое изображение",
  },
  {
    image: "https://picsum.photos/800/400?random=7",
    alt: "Второе изображение",
  },
];

const manySlides: Slide[] = [
  ...sampleSlides,
  {
    image: "https://picsum.photos/800/400?random=8",
    alt: "Дополнительное изображение 1",
  },
  {
    image: "https://picsum.photos/800/400?random=9",
    alt: "Дополнительное изображение 2",
  },
  {
    image: "https://picsum.photos/800/400?random=10",
    alt: "Дополнительное изображение 3",
  },
];

export const Default: Story = {
  args: {
    slides: sampleSlides,
    autoplayEnabled: false,
    autoplayDelay: 3000,
  },
};

export const WithAutoplay: Story = {
  args: {
    slides: sampleSlides,
    autoplayEnabled: true,
    autoplayDelay: 3000,
  },
  parameters: {
    docs: {
      description: {
        story: "Слайдер с включенной автопрокруткой каждые 3 секунды.",
      },
    },
  },
};

export const FastAutoplay: Story = {
  args: {
    slides: sampleSlides,
    autoplayEnabled: true,
    autoplayDelay: 1500,
  },
  parameters: {
    docs: {
      description: {
        story: "Слайдер с быстрой автопрокруткой каждые 1.5 секунды.",
      },
    },
  },
};

export const SlowAutoplay: Story = {
  args: {
    slides: sampleSlides,
    autoplayEnabled: true,
    autoplayDelay: 5000,
  },
  parameters: {
    docs: {
      description: {
        story: "Слайдер с медленной автопрокруткой каждые 5 секунд.",
      },
    },
  },
};

export const FewSlides: Story = {
  args: {
    slides: fewSlides,
    autoplayEnabled: true,
    autoplayDelay: 3000,
  },
  parameters: {
    docs: {
      description: {
        story: "Слайдер с небольшим количеством слайдов (2 изображения).",
      },
    },
  },
};

export const ManySlides: Story = {
  args: {
    slides: manySlides,
    autoplayEnabled: true,
    autoplayDelay: 3000,
  },
  parameters: {
    docs: {
      description: {
        story: "Слайдер с большим количеством слайдов (8 изображений).",
      },
    },
  },
};

export const ManualOnly: Story = {
  args: {
    slides: sampleSlides,
    autoplayEnabled: false,
    autoplayDelay: 3000,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Слайдер только с ручным управлением - автопрокрутка отключена. Пользователь может переключать слайды кликом по точкам или перетаскиванием.",
      },
    },
  },
};
