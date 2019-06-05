const transformOffsetPaginationResponse = apiResponse => ({
  nodes: apiResponse.data,
  pageInfo: {
    first: apiResponse.meta.paging.first,
    offset: apiResponse.meta.paging.offset,
    totalCount: apiResponse.meta.paging.totalCount,
  },
});

module.exports = {
  transformOffsetPaginationResponse,
}
