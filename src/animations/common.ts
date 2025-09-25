import { NameSpaces } from "../constants/namespaces.constants";
import { triggerHomeAnimations } from "./home-animations";

export function handleAnimation(namespace: string, container: any) {
  switch (namespace) {
    case NameSpaces.HOME:
      triggerHomeAnimations(container);
  }
}
