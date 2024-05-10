'use client';

import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { sectionsLinks } from '../lib/constants';

type TSectionLinks = (typeof sectionsLinks)[number]['name'];

type TActiveSectionContext = {
  activeSection: TSectionLinks;
  setActiveSection: Dispatch<SetStateAction<TSectionLinks>>;
};

export const ActiveSectionContext = createContext<TActiveSectionContext | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<TSectionLinks>('bio');
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  console.log('context', context);

  if (!context) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }
  return context;
}
