import React from 'react';

interface CollapsibleProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface CollapsibleTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({ children }) => {
  return <>{children}</>;
};

interface CollapsibleContentProps {
  children: React.ReactNode;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ children }) => {
  return <div>{children}</div>;
};
