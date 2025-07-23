import { toggleTheme } from "@/store/features/ThemeSlice";
import { useAppDispatch } from "@/store/store";

const useChangeTheme = ()=>{
    const dispatch = useAppDispatch()
    const handleThemeChange = () => {
        dispatch(toggleTheme())
      };
    return {handleThemeChange}
}

export default useChangeTheme