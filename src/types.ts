export interface YamlPage<Fields> {
  pagesYaml: Fields;
}

export interface FeaturedEvent {
  displayName: string;
  slug: string;
  show: boolean;
}

export enum CoverVariant {
  Dark = "dark",
}
