export type TodoFilter = 'all' | 'important' | 'completed';

export interface FiltersProps {
  filter: TodoFilter;
  onChooseFilter: (filterData: TodoFilter) => void;
  search: string;
  onChangeSearch: (search: string) => void;
}
