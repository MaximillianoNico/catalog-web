export interface IFilterValues {
  selected: string[],
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (select: boolean, id: string) => void
  onApply: () => void
  isSelected: (id: string, useLocalState?: boolean) => boolean
}