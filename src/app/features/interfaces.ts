import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ISubPageOptions {
  title: string;
  icon: IconDefinition;
  link: string;
}

export interface ISearchFormOptions {
  title: string;
  titlePlaceholder: string;
}

export interface ISearchFormData {
  searchWord: string;
  searchIn?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
}

export interface IUserLog {
  userId: number;
  userName: string;
  firstName: string;
  languageCode: string;
  messageId: number;
  question: string;
  response: string;
  requestDate: string;
  responseDate: string;
}

export interface ISuggestions {
  text: string;
  highlighted: string;
}

export interface IFullTextHTTPResponse {
  status: number;
  data: {
    total: {
      value: number;
      relation: string;
    };
    hits: Array<IUserLog>;
    suggestions: Array<ISuggestions>;
  };
}

export interface ISearchByUsernameHTTPResponse {
  status: number;
  data: {
    total: {
      value: number;
      relation: string;
    };
    hits: Array<IUserLog>;
  };
}

export interface IFullTextSearchResponse {
  total: {
    value: number;
    relation: string;
  };
  hits: Array<IUserLog>;
  suggestions: Array<ISuggestions>;
}

export interface IUsersActivityStatHTTPResponse {
  status: number;
  data: {
    numberOfRemainingUsers: number;
    usersActivity: Array<{
      doc_count: number;
      key: string;
    }>;
  };
}

export interface IUsersActivityStatResponse {
  numberOfRemainingUsers: number;
  usersActivity: Array<{
    doc_count: number;
    key: string;
  }>;
}

export interface IUsageActivityStatHTTPResponse {
  status: number;
  data: {
    usageActivity: Array<{
      key_as_string: string;
      key: string;
      doc_count: number;
    }>;
  };
}

export interface IUsageActivityStatResponse {
  usageActivity: Array<{
    key_as_string: string;
    key: string;
    doc_count: number;
  }>;
}

export interface ISearchByUsernameResponse {
  total: {
    value: number;
    relation: string;
  };
  hits: Array<IUserLog>;
}
