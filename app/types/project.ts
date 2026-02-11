export type Project = {
  id: string;
  slug: string;
  title: string;
  blurb: string;
  image: string;
  repo?: string;
  live?: string;
  tags: string[];

  screenshots?: {
    desktop?: string[];
    mobile?: string[];
  };

  overview?: string;
  architecture?: string;
  challenges?: string[];
  improvements?: string[];
};
