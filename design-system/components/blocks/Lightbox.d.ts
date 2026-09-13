import * as React from 'react';

/** Full-screen dark viewer for artifact shots, with prev/next and an "n / m" counter. */
export interface LightboxProps {
  open: boolean;
  title?: string;
  /** Secondary line, e.g. "HomeServe · Service blueprint". */
  meta?: string;
  index?: number;
  total?: number;
  src?: string;
  /** Shown when no image is supplied. */
  placeholder?: string;
  onClose?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}
export declare function Lightbox(props: LightboxProps): JSX.Element | null;
