import React from 'react';
import { ContactPage } from './contact_page_source';
import { Pattern } from "../pattern/Pattern";


export function ContactPageRoute() {
    return (
      <>
        <Pattern>
            <ContactPage/>
        </Pattern>
      </>
    );
  }