export interface BarbaTransitionEvent {
  current: Current;
  event: Event;
  next: Next;
  trigger: Trigger;
}

export interface Current {
  container: Container;
  html: string;
  namespace: string;
  url: Url;
}

export interface Container {}

export interface Url {
  href: string;
  path: string;
  port: number;
  query: Query;
}

export interface Query {}

export interface Event {
  isTrusted: boolean;
}

export interface Next {
  container: HTMLElement;
  html: string;
  namespace: string;
  url: Url2;
}

export interface Container2 {}

export interface Url2 {
  href: string;
  path: string;
  port: number;
  query: Query2;
}

export interface Query2 {}

export interface Trigger {}
