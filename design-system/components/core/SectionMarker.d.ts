import * as React from 'react';

/**
 * Accent marker that sits in the left rail of every section.
 * @startingPoint section="Core" subtitle="Left-rail section marker" viewport="700x120"
 */
export interface SectionMarkerProps {
  /** Zero-padded, continuous within a page, e.g. "04". */
  number?: string;
  label: string;
  style?: React.CSSProperties;
}
export declare function SectionMarker(props: SectionMarkerProps): JSX.Element;
