import { useEffect, useState } from "react";


const useDarkMode = () => {
    const [Themes, setThemes] = useState(localStorage.theme);
    const colorTheme= Themes==='dark'?'light':'dark';
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme)
        root.classList.add(Themes);
        localStorage.setItem("theme",Themes)
    }, [Themes,colorTheme])
    return [colorTheme,setThemes]
}

export default useDarkMode
 