import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeActiveTheme } from "../store/themeSlice"

const useColourThemeHook = () => {
    const currentTheme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch()
    const [theme, setTheme] = useState({
        bgcolour: '  bg-blue-100  ',
        textColour: 'text-blue-500 hover:text-white',
        bordercolour: 'border-opacity-30 border-blue-500 '
    })


    const changeTheme = (theme) => {
        dispatch(changeActiveTheme(theme))
    }

    useEffect(()=>{
        console.log(currentTheme,themeSet[currentTheme])
        setTheme(themeSet[currentTheme||'normal'])
    },[currentTheme])


    return { theme, changeTheme,themeSet }
}
export default useColourThemeHook


const themeSet = {
    normal: {
        bgcolour: '  bg-white  ',
        textColour: 'text-gray-500 hover:text-cyan-900',
        bordercolour: 'border-opacity-30 border-cyan-300     hover:'
    },

    ocean: {
        bgcolour: '  bg-blue-700  ',
        textColour: 'text-blue-500   ',
        bordercolour: 'border-opacity-30 border-blue-500 hover:'
    },

    sunset: {
        bgcolour: '  bg-orange-100  ',
        textColour: 'text-orange-500   ',
        bordercolour: 'border-opacity-30 border-orange-500  '
    },

    midnight: {
        bgcolour: '  bg-gray-900  ',
        textColour: 'text-gray-200   ',
        bordercolour: 'border-opacity-30 border-gray-700    '
    },

    emerald: {
        bgcolour: '  bg-green-100  ',
        textColour: 'text-green-500   ',
        bordercolour:  'border-opacity-30  border-green-600  '
    },

    royal: {
        bgcolour: '  bg-purple-100  ',
        textColour: 'text-purple-500   ',
        bordercolour:  'border-opacity-30  border-purple-500   '
    },

    cyberpunk: {
        bgcolour: '  bg-gray-900   ',
        textColour: 'text-pink-500 hover:text-black',
        bordercolour:  'border-opacity-30  border-pink-500  '
    },

    lava: {
        bgcolour: '  bg-red-100 hover: ',
        textColour: 'text-red-500   ',
        bordercolour:  'border-opacity-30  border-red-500   '
    },

    frosty: {
        bgcolour: '  bg-blue-100  ',
        textColour: 'text-blue-500   ',
        bordercolour: ' border-opacity-30  border-blue-600 '
    }
}
