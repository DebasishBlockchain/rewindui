import { CheckboxComponent, CheckboxProps } from '@components/Checkbox/Checkbox.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';

const defaultProps: Partial<CheckboxProps> = {
  color: 'blue',
  disabled: false,
  radius: 'md',
  size: 'md',
  tone: 'solid',
  withRing: true,
};

export const Checkbox: CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref?: Ref<HTMLInputElement>) => {
    const theme = useComponentTheme('Checkbox');
    const {
      children,
      className = '',
      color,
      disabled,
      radius,
      size,
      tone,
      wrapperProps,
      withRing,
      label,
      labelProps,
      labelClassName = '',
      description,
      descriptionProps,
      descriptionClassName = '',
      error,
      errorProps,
      errorClassName = '',
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const validation = !!error ? 'invalid' : 'valid';

    const classes = useMemo(() => {
      return theme.base({
        className,
        color,
        radius,
        size,
        tone,
        validation,
        withRing,
      });
    }, [theme, color, tone, size, radius, validation, withRing, className]);

    return (
      <div className="flex items-center" {...wrapperProps}>
        <input
          id={id}
          ref={ref}
          type="checkbox"
          className={classes}
          disabled={disabled}
          {...additionalProps}
        />
        <div className="flex flex-col">
          <label
            htmlFor={id}
            className={theme.label({ size, className: labelClassName })}
            {...labelProps}
          >
            {label}
          </label>
          {description && (
            <span
              className={theme.description({ size, className: descriptionClassName })}
              {...descriptionProps}
            >
              {description}
            </span>
          )}
          {error && (
            <span className={theme.error({ size, className: errorClassName })} {...errorProps}>
              {error}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
