import * as React from 'react';

export interface AccordionRowProps {
  /** The always-visible label. */
  label: React.ReactNode;
  /** Panel content, revealed on open. */
  children?: React.ReactNode;
  /** Open on first render. Default false. */
  defaultOpen?: boolean;
  /** Last row in a stack — draws the closing rule when collapsed. */
  last?: boolean;
  style?: React.CSSProperties;
}

export declare function AccordionRow(props: AccordionRowProps): JSX.Element;
