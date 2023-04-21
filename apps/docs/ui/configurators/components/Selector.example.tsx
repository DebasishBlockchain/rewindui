import { Select, Selector, SelectorProps, SelectProps } from '@rewind-ui/core';
import * as React from 'react';

export const SelectorCode = (props: any) => {
  const { size, fullWidth, orientation, tone, shadow, radius, withAnimation, withSeparator } =
    props;

  const defaultProps = {
    fullWidth: false,
    orientation: 'horizontal',
    radius: 'md',
    shadow: 'base',
    size: 'md',
    tone: 'solid',
    withAnimation: true,
    withSeparator: true,
  };

  const attributes = [
    fullWidth !== defaultProps.fullWidth ? `fullWidth={${fullWidth}}` : null,
    orientation !== defaultProps.orientation ? `orientation="${orientation}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    withAnimation !== defaultProps.withAnimation ? `withAnimation={${withAnimation}}` : null,
    withSeparator !== defaultProps.withSeparator ? `withSeparator={${withSeparator}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Selector } from '@rewind-ui/core';

function App() {
  return (
     <Selector value="apple"${attributes.join(' ')}>
      <Selector.Tab anchor="apple" label="Apple"></Selector.Tab>
      <Selector.Tab anchor="orange" label="Orange"></Selector.Tab>
      <Selector.Tab anchor="banana" label="Banana"></Selector.Tab>
    </Selector>
  );
}
`.trim();
};

export const SelectorExample = (props: SelectorProps) => {
  return (
    <Selector {...props} value="apple">
      <Selector.Tab anchor="apple" label="Apple"></Selector.Tab>
      <Selector.Tab anchor="orange" label="Orange"></Selector.Tab>
      <Selector.Tab anchor="banana" label="Banana"></Selector.Tab>
    </Selector>
  );
};
