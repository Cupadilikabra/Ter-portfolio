// themeHandler.js

/**
 * Change the theme by adding a class to the body or root element.
 * @param {string} theme - The theme to set (e.g., 'light', 'dark').
 */
export function changeTheme(theme) {
    const validThemes = ['light', 'dark', 'blue']; // Define your supported themes
  
    if (validThemes.includes(theme)) {
      // Remove existing theme classes
      document.body.classList.remove(...validThemes);
      // Add the new theme class
      document.body.classList.add(theme);
      console.log(`Theme changed to: ${theme}`);
    } else {
      console.error(`Invalid theme: ${theme}`);
    }
  }
/**
 * Change the theme by updating the `body` class.
 * @param {string} theme - The name of the theme (e.g., 'light', 'dark', 'blue').
 */

  
export function resetTheme() {
    const validThemes = ['light', 'dark', 'blue'];
    // Remove all theme-related classes
    document.body.classList.remove(...validThemes);
    
  }