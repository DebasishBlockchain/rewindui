import { Button, Card, CardProps, FormControl, Modal, ModalProps, Text } from '@rewind-ui/core';
import { useState } from 'react';
import * as React from 'react';

export const ModalCode = (props: any) => {
  const {
    closeOnEscape,
    color,
    mode,
    overlayBlur,
    overlayCloseOnClick,
    overlayColor,
    overlayOpacity,
    radius,
    shadow,
    size,
  } = props;

  const defaultProps = {
    closeOnEscape: true,
    color: 'white',
    mode: 'dialog',
    open: false,
    overlayBlur: 'sm',
    overlayCloseOnClick: true,
    overlayColor: 'dark',
    overlayOpacity: '50',
    radius: 'md',
    shadow: 'base',
    size: 'sm',
  };

  const attributes = [
    closeOnEscape !== defaultProps.closeOnEscape ? `closeOnEscape={${closeOnEscape}}` : null,
    color !== defaultProps.color ? `color="${color}"` : null,
    mode !== defaultProps.mode ? `mode="${mode}"` : null,
    overlayBlur !== defaultProps.overlayBlur ? `overlayBlur="${overlayBlur}"` : null,
    overlayCloseOnClick !== defaultProps.overlayCloseOnClick
      ? `overlayCloseOnClick="${overlayCloseOnClick}"`
      : null,
    overlayOpacity !== defaultProps.overlayOpacity ? `overlayOpacity="${overlayOpacity}"` : null,
    overlayColor !== defaultProps.overlayColor ? `overlayColor="${overlayColor}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Modal } from '@rewind-ui/core';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal${attributes.join(' ')} open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col p-10 space-y-2">
          <p>I am a modal!</p>

          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>

      <Button onClick={() => setOpen(true)}>Click me!</Button>
    </>
  );
}
`.trim();
};

export const ModalExample = (props: ModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal {...props} open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col p-10 space-y-2">
          <p>I am a modal!</p>

          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>

      <Button onClick={() => setOpen(true)}>Click me!</Button>
    </>
  );
};
