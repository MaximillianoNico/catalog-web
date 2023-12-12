"use client"
import { FC, useMemo, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import cn from 'classnames';

import useDevice from "../../hooks/use-device";
import './sidebar.styles.scss'
import { ICategory } from "../../screens/discovery-page";
import useAction from "./actions";

const FilterItem:FC<ISidebar> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { onSelect, onApply, isSelected } = useAction();
  const onToggle = () => setOpen(prev => !prev);

  return (
    <div className="filter-item">
      <div className="filter-item__input" onClick={onToggle}>
        <span>Category</span>
        <div>
          <CaretDown size={20} color="#313030" />
        </div>
      </div>

      {isOpen && (
        <div className={"filter-item__dropdown" + (isOpen ? " active" : "")}>
          {props?.category?.length && props?.category?.map(
            ({ label, id }) => (
              <div key={id} className="filter-item__dropdown-item">
                <input
                  value={id}
                  type="checkbox"
                  onChange={onSelect}
                />
                <span>{label}</span>
              </div>
            )
          )}
        </div>
      )}

      <button onClick={onApply} className="button-apply">Apply</button>
    </div>
  )
}

const FilterMobile:FC<ISidebar> = (props) => {
  const { onClick, isSelected } = useAction();

  return (
    <div>
      <div className="filter-label">Categories</div>
      <div className="filter-chips">
        {props?.category?.length && props?.category?.map(
          ({ label, id }) => (
            <div
              key={id}
              className={cn("filter-chips__item", { "active": !!isSelected(id) })}
              onClick={() => {
                onClick(!isSelected(id), id)
              }}
            >
              {label}
            </div>
          )
        )}
      </div>
    </div>
  )
}

interface ISidebar {
  category: ICategory[]
}

const Component:FC<ISidebar> = (props) => {
  const { isMobile } = useDevice()

  return (
    <div className="sidebar">
      {!isMobile && <div className="filter-label">Filters</div>}
      {!isMobile ? <FilterItem category={props?.category} /> : <FilterMobile category={props?.category}/>}

    </div>
  )
}

export default Component;
