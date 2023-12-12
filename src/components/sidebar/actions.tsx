
"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from "react";

const useAction = () => {
  const router = useRouter();
  const params = useSearchParams();

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

    console.log('select: ', categorySelect, id, select)
    setCategorySelected(categorySelect);
    router.push(`/?categories=${categorySelect?.length ? categorySelect?.join(',') : ""}`)
  } 

  const onApply = () => {
    router.push(`/?categories=${categorySelected?.join(',')}`)
  }

  const isSelected = useCallback(
    (id: string, useLocalState = false) => {
      const stateCategories = params.get('categories');
      let categorySelect = stateCategories ? stateCategories?.split(',') : [];

      if (useLocalState) {
        return categorySelected.includes(id)
      }

      return !!categorySelect.includes(id)
    },
    [categorySelected, params]
  )

  return {
    selected: categorySelected,
    onSelect,
    onApply,
    onClick,
    isSelected
  }
}

export default useAction;
