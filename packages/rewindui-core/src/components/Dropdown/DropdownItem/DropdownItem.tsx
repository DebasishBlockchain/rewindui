import { useDropdownContext } from '@components/Dropdown/Dropdown.context';
import {
  DropdownItemComponent,
  DropdownItemProps,
} from '@components/Dropdown/DropdownItem/DropdownItem.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { Ref, forwardRef, useRef, useMemo } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { twMerge } from 'tailwind-merge';

const DropdownItem: DropdownItemComponent = forwardRef(
  (props: DropdownItemProps, ref?: Ref<HTMLButtonElement>) => {
    const theme = useComponentTheme('Dropdown');
    const { accent, itemColor, mode, size } = {
      ...props,
      ...useDropdownContext(),
    };
    const {
      children,
      className = '',
      color = itemColor,
      tabIndex,
      ...additionalProps
    } = {
      ...props,
    };
    const localRef = useRef<HTMLButtonElement>(null);
    const mergedRef = mergeRefs([ref || null, localRef]);

    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(
        theme.item({
          accent,
          className,
          color,
          mode,
          size,
        })
      );
    }, [accent, className, color, mode, size, theme]);

    const handleMouseEnter = () => {
      if (localRef.current) {
        localRef.current.focus();
      }
    };
    const handleMouseLeave = () => {
      if (localRef.current) {
        localRef.current.blur();
      }
    };

    return (
      <button
        id={id}
        ref={mergedRef}
        tabIndex={tabIndex}
        className={classes}
        role={'menuitem'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...additionalProps}
      >
        {children}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

export { DropdownItem };
