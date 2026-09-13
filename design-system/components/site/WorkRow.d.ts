import * as React from 'react';

/**
 * Numbered work row: tint on hover, arrow nudges, title holds at ink.
 * @startingPoint section="Site" subtitle="Numbered work list row" viewport="700x120"
 */
export interface WorkRowProps {
  number: string;
  title: string;
  href?: string;
  /** False for rows without a case study — hides the arrow and the hover tint. */
  linked?: boolean;
  style?: React.CSSProperties;
}
export declare function WorkRow(props: WorkRowProps): JSX.Element;
