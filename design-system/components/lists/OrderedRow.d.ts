import * as React from 'react';

/** Numbered row, optionally with a bold title above its body copy. */
export interface OrderedRowProps {
  /** Zero-padded, e.g. "01". */
  number: string;
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function OrderedRow(props: OrderedRowProps): JSX.Element;
