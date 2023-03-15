import { TextareaComponent, TextareaProps } from '@components/Textarea/Textarea.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<TextareaProps> = {
  tone: 'base',
  radius: 'md',
  size: 'md',
  validation: 'none',
  shadow: 'none',
  withRing: true,
  disabled: false,
};

const Textarea: TextareaComponent = forwardRef(
  (props: TextareaProps, ref?: Ref<HTMLTextAreaElement>) => {
    const theme = useComponentTheme('Textarea');
    const {
      className = '',
      disabled,
      tone,
      size,
      radius,
      validation,
      shadow,
      withRing,
      type = 'text',
      ...additionalProps
    } = {
      ...defaultProps,
      // ...useFormControlContext(),
      // ...useInputGroupContext(),
      ...props,
    };
    const id = usePropId(props.id);

    const classes = useMemo(() => {
      return twMerge(
        theme({
          className,
          disabled,
          radius,
          shadow,
          size,
          tone,
          validation,
          withRing,
        })
      );
    }, [className, disabled, radius, shadow, size, theme, tone, validation, withRing]);

    return (
      <textarea id={id} ref={ref} className={classes} {...additionalProps} disabled={disabled} />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
