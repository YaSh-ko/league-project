export type TodoFilter = 'all' | 'important' | 'completed' | 'active';

export interface FiltersProps {
  filter: TodoFilter;
  onChooseFilter: (filterData: TodoFilter) => void;
  search: string;
  onChangeSearch: (search: string) => void;
}
