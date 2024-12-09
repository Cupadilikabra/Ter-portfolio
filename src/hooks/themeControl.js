
/**
 * @param {string} theme
*/
export function themeControl(theme){
    const validThemes = ['light','dark','blue'];

    if(validThemes.includes(theme)) 
        document.body.classList.remove(...validThemes);
    document.body.classList.add(theme);
    
}




export function resetTheme(){
    const validThemes = ['light','dark','blue'];

    document.body.classList.remove(...validThemes);
}