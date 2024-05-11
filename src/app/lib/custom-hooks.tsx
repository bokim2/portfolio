import { useEffect } from 'react';
import { useActiveSectionContext } from '../context/activeSection';
import { useInView } from 'react-intersection-observer';
import { TSectionLinks } from './types';


export function useUpdateActiveSection(sectionName: TSectionLinks){
    const {activeSection, setActiveSection} = useActiveSectionContext(); 

    const {ref, inView} = useInView({
      threshold: 0.75,
      triggerOnce: false,
    })
  
  useEffect(() => {
    console.log('inView, activeSection', inView, activeSection)
    if(inView){setActiveSection(sectionName)}
  },[inView, setActiveSection])

  return {activeSection, setActiveSection, ref}

} 