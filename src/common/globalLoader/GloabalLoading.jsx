import React from 'react'
import "./GloabalLoading.css"
import useDarkmode from '../../Hooks/useDarkMode'

function GloabalLoading() {
    const [isDark] = useDarkmode()
    return (
        <div>
            <div id="page">
                <div id="container">
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="h3" className={`${isDark ? "text-white" : "rgb(82, 79, 79)"}`}>loading</div>
                </div>
            </div>

        </div>
    )
}

export default GloabalLoading