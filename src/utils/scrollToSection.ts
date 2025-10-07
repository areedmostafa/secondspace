/**
 * Scroll Utility Functions
 * Provides smooth scrolling to page sections
 */

/**
 * Smoothly scroll to a section by its ID
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
