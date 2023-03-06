/* eslint-disable prettier/prettier */
import type {
  DefaultDocumentNodeResolver,
  StructureResolver,
} from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
import { Disc, Users, Tags, Home } from 'lucide-react';

import { projectDetails } from '~/sanity/projectDetails';
import type { SanityDocumentWithSlug } from '~/sanity/structure/resolvePreviewUrl';
import { resolvePreviewUrl } from '~/sanity/structure/resolvePreviewUrl';

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      // Singleton, home page curation
      S.documentListItem()
        .schemaType('home')
        .icon(Home)
        .id('home')
        .title('Home'),
      S.divider(),
      // Document lists
      S.documentTypeListItem('product').title('Products').icon(Disc),
      S.documentTypeListItem('category').title('Category').icon(Users),
      S.divider(),
      S.documentTypeListItem('tag').title('Tags').icon(Tags),
    ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType, getClient }
) => {
  const { apiVersion } = projectDetails();
  const client = getClient({ apiVersion });

  switch (schemaType) {
    case `product`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocumentWithSlug) =>
              resolvePreviewUrl(doc, client),
            reload: { button: true },
          })
          .title('Preview'),
      ]);

    default:
      return S.document().views([S.view.form()]);
  }
};
