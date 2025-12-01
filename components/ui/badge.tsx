import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]",
  {
    variants: {
      variant: {
        default:
          "border-[var(--border-default)] bg-[var(--background-elevated)] text-[var(--text-primary)]",
        primary:
          "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]",
        alert:
          "border-[var(--accent-alert)] bg-[var(--accent-alert)]/10 text-[var(--accent-alert)]",
        error:
          "border-[var(--accent-error)] bg-[var(--accent-error)]/10 text-[var(--accent-error)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  led?: boolean;
  ledStatus?: 'available' | 'low' | 'unavailable';
}

function Badge({ className, variant, led, ledStatus, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {led && ledStatus && (
        <span
          className={cn(
            "led-indicator",
            ledStatus === 'available' && "led-available",
            ledStatus === 'low' && "led-low",
            ledStatus === 'unavailable' && "led-unavailable"
          )}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
