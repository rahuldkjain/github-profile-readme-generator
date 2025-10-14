'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info';
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
}: ConfirmDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const variantStyles = {
    danger: {
      icon: 'text-red-600',
      confirmButton: 'bg-red-600 hover:bg-red-700 text-white',
      backdrop: 'bg-red-50',
    },
    warning: {
      icon: 'text-amber-600',
      confirmButton: 'bg-amber-600 hover:bg-amber-700 text-white',
      backdrop: 'bg-amber-50',
    },
    info: {
      icon: 'text-blue-600',
      confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white',
      backdrop: 'bg-blue-50',
    },
  };

  const styles = variantStyles[variant];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4"
            role="dialog"
            aria-labelledby="confirm-dialog-title"
            aria-describedby="confirm-dialog-description"
            aria-modal="true"
          >
            <div className="bg-card border-border rounded-xl border shadow-2xl">
              {/* Header */}
              <div className="flex items-start gap-4 p-6 pb-4">
                <div className={`rounded-full p-2 ${styles.backdrop}`}>
                  <AlertTriangle className={`h-5 w-5 ${styles.icon}`} />
                </div>
                <div className="flex-1">
                  <h3 id="confirm-dialog-title" className="text-lg leading-6 font-semibold">
                    {title}
                  </h3>
                  <p
                    id="confirm-dialog-description"
                    className="text-muted-foreground mt-2 text-sm leading-relaxed"
                  >
                    {message}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground rounded-lg p-1 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Actions */}
              <div className="flex gap-3 p-6 pt-2">
                <button
                  onClick={onClose}
                  className="border-border hover:bg-accent flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
                >
                  {cancelText}
                </button>
                <button
                  onClick={handleConfirm}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${styles.confirmButton}`}
                >
                  {confirmText}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Hook for using confirmation dialogs
 */
export function useConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<
    Omit<ConfirmDialogProps, 'isOpen' | 'onClose' | 'onConfirm'>
  >({
    title: '',
    message: '',
  });
  const [confirmCallback, setConfirmCallback] = useState<(() => void) | null>(null);

  const showConfirm = (
    options: Omit<ConfirmDialogProps, 'isOpen' | 'onClose' | 'onConfirm'> & {
      onConfirm: () => void;
    }
  ) => {
    const { onConfirm, ...rest } = options;
    setConfig(rest);
    setConfirmCallback(() => onConfirm);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    // Clear callback after a small delay to prevent race conditions
    setTimeout(() => {
      setConfirmCallback(null);
    }, 100);
  };

  const handleConfirm = () => {
    if (confirmCallback) {
      confirmCallback();
    }
    closeDialog();
  };

  const ConfirmDialogComponent = () => (
    <ConfirmDialog isOpen={isOpen} onClose={closeDialog} onConfirm={handleConfirm} {...config} />
  );

  return {
    showConfirm,
    ConfirmDialog: ConfirmDialogComponent,
  };
}
