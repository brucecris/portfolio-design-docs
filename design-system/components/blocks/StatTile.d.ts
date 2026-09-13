import * as React from 'react';

/**
 * Evidence tile: a large figure over a sentence, in a rule-divided grid.
 * @startingPoint section="Blocks" subtitle="Evidence tile grid" viewport="700x260"
 */
export interface StatTileProps {
  /** Figure string; its length picks the type size automatically. */
  figure: string;
  label: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function StatTile(props: StatTileProps): JSX.Element;
