export type TodoFilterType = 'all' | 'important' | 'completed' | 'active';

export interface FiltersProps {
  filter: TodoFilterType;
  onChooseFilter: (filterData: TodoFilterType) => void;
  search: string;
  onChangeSearch: (search: string) => void;
}
