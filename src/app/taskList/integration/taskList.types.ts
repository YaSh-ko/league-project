import { Todo } from 'types/Todo';

export interface InitialState {
  items: Todo[];
  loading: boolean;
  error: string | null;
}
