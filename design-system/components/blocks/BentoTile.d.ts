import * as React from 'react';

/**
 * One cell of the six-column bento grid used for capability sets.
 * @startingPoint section="Blocks" subtitle="Six-column bento grid" viewport="700x300"
 */
export interface BentoTileProps {
  title: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  /** 2, 3, 4 or 6. */
  colSpan?: number;
  /** 1, or 2 for the single tall tile per group. */
  rowSpan?: number;
  style?: React.CSSProperties;
}
export declare function BentoTile(props: BentoTileProps): JSX.Element;
