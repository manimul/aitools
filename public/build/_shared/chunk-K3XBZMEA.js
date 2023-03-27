// app/sanity/projectDetails.ts
var projectDetails = () => {
  const {
    SANITY_PUBLIC_PROJECT_ID,
    SANITY_PUBLIC_DATASET,
    SANITY_PUBLIC_API_VERSION
  } = typeof document === "undefined" ? process.env : window.ENV;
  return {
    projectId: SANITY_PUBLIC_PROJECT_ID != null ? SANITY_PUBLIC_PROJECT_ID : `hw4meujw`,
    dataset: SANITY_PUBLIC_DATASET != null ? SANITY_PUBLIC_DATASET : `production`,
    apiVersion: SANITY_PUBLIC_API_VERSION != null ? SANITY_PUBLIC_API_VERSION : `2022-09-19`
  };
};

export {
  projectDetails
};
//# sourceMappingURL=/build/_shared/chunk-K3XBZMEA.js.map
