"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { createContext, useCallback, useContext, useState } from 'react';

const initialValues = {
  selected: [],
  onSelect: () => {},
  onClick: () => {},
  onApply: () => {},
  isSelected: () => false
}

interface IFilterValues {
  selected: string[],
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (select: boolean, id: string) => void
  onApply: () => void
  isSelected: (id: string, useLocalState?: boolean) => boolean
}

const FilterCtx = createContext<IFilterValues>(initialValues);

interface IFilterContext {
  children: React.ReactNode
}

export const FilterContext = ({ children }: IFilterContext) => {
  const params = useSearchParams();
  const router = useRouter();

  const [categorySelected, setCategorySelected] = useState<string[]>([]);
  
  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let categorySelect = categorySelected

    if (e.target.checked) {
      categorySelect?.push(e?.target?.value);
    }

    if (!e.target.checked) {
      categorySelect = categorySelect.filter(itm => itm !== e.target.value);
    }

    setCategorySelected(categorySelect);
  }

  const onClick = (select: boolean, id: string) => {
    const stateCategories = params.get('categories')
    let categorySelect = stateCategories ? stateCategories?.split(',') : [];

    if (select) {
      categorySelect?.push(id);
    } else {
      categorySelect = categorySelect.filter(itm => itm !== id);
    }

    setCategorySelected(categorySelect);
    router.push(`/?categories=${categorySelect?.length ? categorySelect?.join(',') : ""}`)
  };

  const onApply = () => {
    router.push(`/?categories=${categorySelected?.join(',')}`)
  }

  const isSelected = useCallback(
    (id: string, useLocalState = false) => {
      const stateCategories = params.get('categories');
      let categorySelect = stateCategories ? stateCategories?.split(',') : [];

      if (useLocalState) {
        return !!categorySelected.includes(id)
      }

      return !!categorySelect.includes(id)
    },
    [categorySelected, params]
  )

  const collectProps = {
    selected: categorySelected,
    isSelected,
    onApply,
    onClick,
    onSelect
  };

  return (
    <FilterCtx.Provider value={collectProps}>
      {children}
    </FilterCtx.Provider>
  );
}

export const useFilter = () => useContext(FilterCtx);