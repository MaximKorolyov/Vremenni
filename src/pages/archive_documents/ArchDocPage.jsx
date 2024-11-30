import React from 'react';
import { ArchDocPage } from './archive_doc_page_source';
import { Pattern } from "../pattern/Pattern";

export function ArchDocPageRoute() {
    return (
      <>
        <Pattern>
            <ArchDocPage/>
        </Pattern>
      </>
    );
  }