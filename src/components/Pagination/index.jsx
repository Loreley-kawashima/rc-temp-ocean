import { Link } from "gatsby"
import React from "react"
import {
  Pagination as MuiPagination,
  PaginationItem as MuiPaginationItem,
} from "@mui/material"

const Component = ({ totalPages, currentPage, linkPrefix }) => {
  return (
    <div className="pageNation" style={{ display: "flex", justifyContent: "center" }}>
      <MuiPagination
        size="medium"
        count={totalPages}
        page={currentPage}
        renderItem={item => (
          <MuiPaginationItem
            component={Link}
            to={`${linkPrefix}${item.page}`}
            {...item}
          />
        )}
      />
    </div>
  )
}

export default Component
