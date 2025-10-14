'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  description?: string;
  icon?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({
  title,
  description,
  icon,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-border bg-card rounded-lg border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-accent/50 flex w-full items-center justify-between p-4 text-left transition-colors"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title} section`}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-xl">{icon}</span>}
          <div>
            <h3 className="text-sm font-semibold">{title}</h3>
            {description && <p className="text-muted-foreground mt-0.5 text-xs">{description}</p>}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-border border-t p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
