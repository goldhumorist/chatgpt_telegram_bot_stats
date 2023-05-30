import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IIndexSearchSubPagesOptions {
  title: string;
  icon: IconDefinition;
  link: string;
}

export type TIndexSearchSubPages = Array<IIndexSearchSubPagesOptions>;
