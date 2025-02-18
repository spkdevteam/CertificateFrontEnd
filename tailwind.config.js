/** @type {import('tailwindcss').Config} */
import  withMT from "@material-tailwind/react/utils/withMT" 

 const conf = withMT( {
  content: [
    "./index.html",
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        danger: {
          50: "#FFF7F7",
          100: "#FEEFEF",
          200: "#FCD6D7",
          300: "#FABBBD",
          400: "#F68B8D",
          500: "#F1595C",
          600: "#D75052",
          700: "#913638",
          800: "#6D292A",
          900: "#461A1B",
        },
        primary: "#2B2B40",
        // secondary: "#eaeef1",
        info:"#06ADB1",
        dark: "#13141A",
        light: "#eaeef1",
        mediumDark : "rgb(57 57 57)",
        contentBg : "#ffffff",

        darkBody :  "#011b1c",
        darkText : "#ddfafe",
        darkPrimary : "#71f3fa",
        darkSecondary : "rgb(11 55 51)",
        darkAccent : "#0a292b",
        darkBtn : "rgb(0 116 117)",
        darkIconAndSearchBg : "rgb(7 84 85)",
        darkBtnHover : "rgb(0 203 205)",
        darkPlaceholder : "#ffffff",
        darkBgSearch : "rgb(11 55 51)",

         // modal input
         daekBgInputColor:"",
         daekborderInputColor :"",
         darkinputTextColor:"",
         darkTitleColor:" #ffffff",




        lightBody : "#F3F6F9",
        lightText : "",
        lightPrimary : "",
        lightSecondary : "",
        lightAccent : "",
        lightBgBtn : "#C9FEFF",
        lightHoverBgBtn : "#06ADB1",
        lightBtntext : "#06ADB1",
        lightIconAndSearchBg : "",
        lightbgIconColor:"#eaeef1",
        lightIconhover:"#06ADB1",
        lightIconColor:"#80808f",
        lightBorderColor:"#E2E6E9",
        lighttableBorderColor:"#bdbdbd",
        tableTextColor:"#9e9e9e",
        loginBtnBgColor:"#06ADB1",
        lightPlaceholder : "#ffffff",
        lightBgSearch:"#eaeef1",

        // modal input color
        lightBgInputColor:"#F8F5FF",
        lightborderInputColor :"#DBDFE9",
        lightinputTextColor:"#4B5675",
        lightModalHeaderColor:"#06ADB1",
        lightTitleColor:"#000000",



        //modal cancel button
        lightmodalBgBtn :"#ffebee",
        lightmodalBgBtnHover :"#e53935",
        lightmodalbtnText:"#e53935",
        lightmodalCrosscolor:"#99A1B7",

        //modal filter button
        darkbgResetClr:"rgb(63 58 58)",
        darkTextResetClr:"#ffffff",





        // modal font size, font weight, line height, width, height

        labelFontSize : "",
        labelFontWeight : "",
        inputHeight : "",
        phFontSize : "",
        phFontWeightv: "",

        titleFontSize : "1.25rem",
        titleLineHeight : "1.75rem",
        titleFontWeight : "700",

        subTitleFontSize : "",
        subTitleFontWeight : "",



        // Main Nav font size, font weight, line height, width, height




        // Sub Nav font size, font weight, line height, width, height



        //Profile overView
        

        

        //token 
        lighttokenBorderClr: "#99A1B7",
        lighttokenBgClr:"#F9F9F9",
        lighttokenTileClr:'#06ADB1',
        lighttokenInnerBorderClr:"#78829D",
        lighttokenInnerBorderBgClr:"#C9FEFF",
        lighttokenSubTitleClr:"#4B5675",

        //Nested table
        lightChildBgClr:"#F8F5FF",
        lightChlidTheadclr:"#DFFFEA",

        //patientNavMenu
        lightTextColor:"#99A1B7",
        lightBorderClr:"#06ADB1",
        lightHoverTextClr:"#06ADB1",

        // for case Sheet
        lightTextHeading:"#06ADB1",

        // icon
        lightIconclr : "#99A1B7"















      },

    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.no-spinner': {
        'appearance': 'textfield',
        '&::-webkit-inner-spin-button': { 'appearance': 'none' },
        '&::-webkit-outer-spin-button': { 'appearance': 'none' },
      },
    });
  },],
})





export default conf