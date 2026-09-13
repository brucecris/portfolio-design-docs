import * as React from 'react';

/** Unordered row: accent arrow in a 20px marker column, hairline beneath. */
export interface ListRowProps {
  children?: React.ReactNode;
  /** Defaults to the accent arrow. */
  marker?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ListRow(props: ListRowProps): JSX.Element;
