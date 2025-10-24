export type Slide = {
  image: string;
  alt?: string;
};

export type SwiperSettings = {
  slides?: Slide[];
  autoplayDelay: number;
  autoplayEnabled: boolean;
};
