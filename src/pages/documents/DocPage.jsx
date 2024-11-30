import React from 'react';
import { DocumentsPage } from './doc_page_source';
import { Pattern } from "../pattern/Pattern";

export function DocumentPageRoute() {
    return (
      <>
        <Pattern>
            <DocumentsPage/>
        </Pattern>
      </>
    );
  }