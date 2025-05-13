/**
 * Reusable Framer Motion variants for consistent animations across the application.
 */

 
export const popUpWithBounce = {
  initial: {
    opacity: 0,
    y: 20, 
    scale: 0.8, 
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
   
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 1,
    },
  },
};

/**
 * @description
 * A generic exit animation where the element:
 * 1. Fades out (opacity: 0).
 * 2. Slides down slightly (y: 20).
 * 3. Scales down slightly (scale: 0.8).
 * 4. Uses a quick ease-in transition.
 */
export const generalExit = {
  opacity: 0,
  y: 20,
  scale: 0.8,
  transition: { duration: 0.25, ease: "easeIn" },
};
