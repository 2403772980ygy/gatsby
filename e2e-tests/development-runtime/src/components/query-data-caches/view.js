import React from "react"

export function QueryDataCachesView({
  data,
  pageType,
  dataType,
  path,
  prefix = ``,
}) {
  if (
    pageType !== `A` &&
    pageType !== `B` &&
    pageType !== `client-only` &&
    pageType !== `404`
  ) {
    throw new Error(
      `[QueryDataCachesView] Wrong page type - ${JSON.stringify(pageType)}`
    )
  }

  if (dataType !== `page-query` && dataType !== `static-query`) {
    throw new Error(
      `[QueryDataCachesView] Wrong data type - ${JSON.stringify(dataType)}`
    )
  }

  return (
    <>
      <h1 data-testid={`${prefix}query-data-caches-page-title`}>
        This is page {pageType}
      </h1>
      <h2>Page query</h2>
      <p>
        <span data-testid={`${prefix}${dataType}-result`}>
          {data.queryDataCachesJson.selector}: {data.queryDataCachesJson.status}
        </span>
      </p>
      {path && (
        <p>
          Canonical path: <span data-testid={`${prefix}page-path`}>{path}</span>
        </p>
      )}
    </>
  )
}
