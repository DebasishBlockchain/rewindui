import { cva } from 'class-variance-authority';

const base = cva(
  [
    'appearance-none',
    'w-full',
    'transition-colors',
    'duration-100',
    'ease-in-out',
    'outline-none',
    'data-[has-left-element=true]:rounded-l-none',
    'data-[has-right-element=true]:rounded-r-none',
    'z-10',
  ],
  {
    variants: {
      size: {
        xs: ['text-xs', 'h-6'],
        sm: ['text-sm', 'h-8'],
        md: ['text-base', 'h-10'],
        lg: ['text-lg', 'h-12'],
      },
      tone: {
        base: ['text-gray-800', 'border', 'focus:bg-gray-50', 'placeholder:text-gray-400'],
        solid: ['text-gray-800', 'border', 'focus:bg-gray-100', 'placeholder:text-gray-400'],
        transparent: ['text-gray-800', 'border', 'placeholder:text-gray-400'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        base: ['rounded'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        full: ['rounded-full'],
      },
      shadow: {
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        base: ['shadow'],
        md: ['shadow-md'],
      },
      hasLeftIcon: {
        true: [],
        false: [],
      },
      validation: {
        none: [],
        invalid: ['border-red-500', 'focus-visible:border-red-500'],
        valid: ['border-green-500', 'focus-visible:border-green-500'],
        warning: ['border-yellow-400', 'focus-visible:border-yellow-400'],
      },
      withRing: {
        true: ['focus:ring-2', 'focus:ring-offset-1'],
        false: ['focus:ring-0'],
      },
      disabled: {
        true: ['cursor-not-allowed'],
        false: [],
      },
    },
    compoundVariants: [
      {
        validation: 'none',
        withRing: true,
        className: ['focus:ring-blue-100'],
      },
      {
        validation: 'invalid',
        withRing: true,
        className: ['focus:ring-red-100'],
      },
      {
        validation: 'valid',
        withRing: true,
        className: ['focus:ring-green-100'],
      },
      {
        validation: 'warning',
        withRing: true,
        className: ['focus:ring-yellow-100'],
      },
      {
        tone: 'base',
        disabled: false,
        className: ['bg-white'],
      },
      {
        tone: 'solid',
        disabled: false,
        className: ['bg-gray-100'],
      },
      {
        tone: 'transparent',
        disabled: false,
        className: ['bg-transparent'],
      },
      {
        tone: 'base',
        disabled: true,
        className: ['bg-gray-100'],
      },
      {
        tone: 'solid',
        disabled: true,
        className: ['bg-gray-200'],
      },
      {
        tone: 'transparent',
        disabled: true,
        className: ['bg-gray-50'],
      },
      {
        tone: 'base',
        validation: 'none',
        className: ['border-gray-300', 'focus-visible:border-blue-500'],
      },
      {
        tone: 'solid',
        validation: 'none',
        className: ['border-gray-200', 'focus-visible:border-blue-500'],
      },
      {
        tone: 'transparent',
        validation: 'none',
        className: ['border-transparent'],
      },
      {
        hasLeftIcon: false,
        size: 'xs',
        className: ['px-2'],
      },
      {
        hasLeftIcon: false,
        size: 'sm',
        className: ['px-3'],
      },
      {
        hasLeftIcon: false,
        size: 'md',
        className: ['px-3'],
      },
      {
        hasLeftIcon: false,
        size: 'lg',
        className: ['px-4'],
      },
      {
        hasLeftIcon: true,
        size: 'xs',
        className: ['pl-7', 'pr-2'],
      },
      {
        hasLeftIcon: true,
        size: 'sm',
        className: ['pl-8', 'pr-3'],
      },
      {
        hasLeftIcon: true,
        size: 'md',
        className: ['pl-11', 'pr-3'],
      },
      {
        hasLeftIcon: true,
        size: 'lg',
        className: ['pl-12', 'pr-4'],
      },
    ],
  }
);

const wrapper = cva(['relative', 'flex', 'items-center', 'w-full']);

const icon = cva([], {
  variants: {
    tone: {
      base: ['text-gray-600'],
      solid: ['text-gray-600'],
      transparent: ['text-gray-600'],
    },
    size: {
      xs: ['h-3.5', 'w-3.5'],
      sm: ['h-4', 'w-4'],
      md: ['h-5', 'w-5'],
      lg: ['h-6', 'w-6'],
    },
  },
});

const leftIconWrapper = cva(['absolute', 'left-0', 'z-20'], {
  variants: {
    size: {
      xs: ['pl-2'],
      sm: ['pl-2.5'],
      md: ['pl-3'],
      lg: ['pl-3'],
    },
  },
});

const rightIconWrapper = cva(['absolute', 'right-0', 'z-20'], {
  variants: {
    size: {
      xs: ['pr-2'],
      sm: ['pr-2.5'],
      md: ['pr-3'],
      lg: ['pr-3'],
    },
  },
});

const selectStyles = {
  base,
  wrapper,
  icon,
  leftIconWrapper,
  rightIconWrapper,
};

export { selectStyles };
