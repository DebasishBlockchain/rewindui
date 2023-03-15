import { SelectComponent, SelectProps } from '@components/Select/Select.types';
import { CaretUpDown } from '@icons/CaretUpDown';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { cloneElement, forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<SelectProps> = {
  tone: 'base',
  radius: 'md',
  size: 'md',
  validation: 'none',
  shadow: 'none',
  withRing: true,
  disabled: false,
};

const Select: SelectComponent = forwardRef((props: SelectProps, ref?: Ref<HTMLSelectElement>) => {
  const theme = useComponentTheme('Select');
  const {
    children,
    className = '',
    disabled,
    leftIcon,
    radius,
    shadow,
    size,
    tone,
    validation,
    withRing,
    ...additionalProps
  } = {
    ...defaultProps,
    // ...useFormControlContext(),
    // ...useInputGroupContext(),
    ...props,
  };
  const id = usePropId(props.id);
  const hasLeftIcon = !!leftIcon;

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        className,
        disabled,
        hasLeftIcon,
        radius,
        shadow,
        size,
        tone,
        validation,
        withRing,
      })
    );
  }, [className, disabled, hasLeftIcon, radius, shadow, size, theme, tone, validation, withRing]);

  const selectElement = (
    <select id={id} ref={ref} className={classes} {...additionalProps} disabled={disabled}>
      {children}
    </select>
  );

  return (
    <div className={theme.wrapper()}>
      {leftIcon && (
        <span className={theme.leftIconWrapper({ size })}>
          {cloneElement(leftIcon, {
            className: theme.icon({ tone, size, className: leftIcon.props.className }),
          })}
        </span>
      )}
      {selectElement}
      <span className={theme.rightIconWrapper({ size })}>
        <CaretUpDown className={theme.icon({ tone, size })} />
      </span>
    </div>
  );
});

Select.displayName = 'Select';

export { Select };