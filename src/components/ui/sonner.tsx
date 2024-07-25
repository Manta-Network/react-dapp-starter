import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:border group-[.toaster]:shadow-lg',
          error:
            'group-[.toaster]:bg-[hsl(359,100%,97%)] group-[.toaster]:text-[hsl(360,100%,45%)] group-[.toaster]:border-[hsl(359,100%,94%)]',
          success:
            'group-[.toaster]:bg-[hsl(143,85%,96%)] group-[.toaster]:text-[hsl(140,100%,27%)] group-[.toaster]:border-[hsl(145,92%,91%)]',
          warning:
            'group-[.toaster]:bg-[hsl(49,100%,97%)] group-[.toaster]:text-[hsl(31,92%,45%)] group-[.toaster]:border-[hsl(49,91%,91%)]',
          info: 'group-[.toaster]:bg-[hsl(208,100%,97%)] group-[.toaster]:text-[hsl(210,92%,45%)] group-[.toaster]:border-[hsl(221,91%,91%)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
