import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Add your custom JSX elements here
      'your-custom-element': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
