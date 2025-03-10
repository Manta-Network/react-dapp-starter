import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:border! group-[.toaster]:shadow-lg!',
          error:
            'group-[.toaster]:bg-[#f00]! group-[.toaster]:text-white! group-[.toaster]:border-none! ',
          success:
            'group-[.toaster]:bg-[#00BF50]! group-[.toaster]:text-white! group-[.toaster]:border-none!',
          warning:
            'group-[.toaster]:bg-[hsl(49,100%,97%)]! group-[.toaster]:text-[hsl(31,92%,45%)]! group-[.toaster]:border-[hsl(49,91%,91%)]!',
          info: 'group-[.toaster]:bg-[hsl(208,100%,97%)]! group-[.toaster]:text-[hsl(210,92%,45%)]! group-[.toaster]:border-[hsl(221,91%,91%)]!',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
