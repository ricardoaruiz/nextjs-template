import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

type TextProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof textVariants>;

const textVariants = cva('text-sm font-medium leading-6 text-foreground', {
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

export const Text = <T extends React.ElementType = 'p'>({
  as,
  children,
  className,
  size,
  ...props
}: TextProps<T>) => {
  const Component = as || 'p';
  return (
    <Component className={cn(textVariants({ size, className }))} {...props}>
      {children}
    </Component>
  );
};
