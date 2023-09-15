import React from 'react';

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;
const GOOGLE_ENDPOINT = 'https://www.googletagmanager.com/gtag/js?id=';

type Props = {
  measurementId?: string;
}

export function GoogleAnalytics({ measurementId = MEASUREMENT_ID }: Props = {}) {
  return (
    <React.Fragment>
      <script src={ `${GOOGLE_ENDPOINT}${measurementId}` } />
      <script dangerouslySetInnerHTML={ {
        __html: 
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');`,
      } } />
    </React.Fragment>
  );
}