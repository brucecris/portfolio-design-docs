import * as React from 'react';

/**
 * Artifact card: cover image that zooms on hover, a pill "View N" button, title, type and client logo.
 * @startingPoint section="Blocks" subtitle="Artifact card grid" viewport="700x320"
 */
export interface DeliverableCardProps {
  title: string;
  /** Artifact kind, e.g. "Service blueprint". Rendered uppercase in accent. */
  type: string;
  /** Number of shots behind the card; drives the button label. */
  shots?: number;
  logoSrc?: string;
  coverSrc?: string;
  onOpen?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function DeliverableCard(props: DeliverableCardProps): JSX.Element;
