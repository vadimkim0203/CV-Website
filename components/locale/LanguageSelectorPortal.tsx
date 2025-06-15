// 'use client';

// import { createPortal } from 'react-dom';
// import LanguageSelector from './LanguageSelector';
// import { useEffect, useState } from 'react';

// export default function LanguageSelectorPortal() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const preventScroll = (e: Event) => {
//       e.preventDefault();
//       e.stopPropagation();
//     };

//     const selectTrigger = document.querySelector('[role="combobox"]');
//     selectTrigger?.addEventListener('click', preventScroll);

//     return () => {
//       selectTrigger?.removeEventListener('click', preventScroll);
//       setMounted(false);
//     };
//   }, []);

//   if (!mounted) return null;

//   return createPortal(
//     <div
//       style={{
//         position: 'fixed',
//         top: '2rem',
//         right: '0.5rem',
//         zIndex: 9999,
//         transform: 'translateZ(0)',
//         willChange: 'transform',
//         isolation: 'isolate'
//       }}
//     >
//       <LanguageSelector />
//     </div>,
//     document.body,
//   );
// }
