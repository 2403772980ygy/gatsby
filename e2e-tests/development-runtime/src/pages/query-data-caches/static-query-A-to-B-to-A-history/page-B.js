import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { QueryDataCachesView } from "../../../components/query-data-caches/view"

export default function StaticQueryAtoBtoAHistoryPageB({ path }) {
  const data = useStaticQuery(graphql`
    {
      queryDataCachesJson(
        selector: { eq: "static-query-A-to-B-to-A-history" }
      ) {
        selector
        status
      }
    }
  `)

  return (
    <>
      <QueryDataCachesView
        data={data}
        pageType="B"
        dataType="static-query"
        path={path}
      />
    </>
  )
}
