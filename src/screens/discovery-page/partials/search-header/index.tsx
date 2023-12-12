import { FC, useMemo } from "react"
import { ISearchHeader } from "../../types";

const Component:FC<ISearchHeader> = (props) => {
  const title = useMemo(
    () => props?.search ? "Search results for" : "Catalog Page",
    [props?.search]
  )
  return (
    <div className="discovery-header">
      <h1 className="title">{title}</h1>
      {props?.search && <h2 className="search-key">{props?.search}</h2>}
    </div>
  )
}

export default Component;
