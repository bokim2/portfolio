import { useEffect } from 'react';
import { useActiveSectionContext } from '../context/activeSection';
import { useInView } from 'react-intersection-observer';
import { TSectionLinks } from './types';
import { time } from 'console';

export function useUpdateActiveSection(sectionName: TSectionLinks) {
  const {
    activeSection,
    setActiveSection,
    timeofLastClick,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: false,
  });

  useEffect(() => {
    console.log('inView, activeSection', inView, activeSection);
    if (inView && Date.now() - timeofLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeofLastClick]);

  return { activeSection, setActiveSection, ref,  timeofLastClick,
    setTimeOfLastClick, };
}
