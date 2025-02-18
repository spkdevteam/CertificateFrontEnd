import GloabalLoading from "../../common/globalLoader/GloabalLoading"
import useDarkmode from "../../Hooks/useDarkMode"

const Loading = () => {
    const [isDark] = useDarkmode()
    return (
        <div className="m-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem", flexDirection: "row", gap: "1rem", background: isDark ? "rgb(11 55 51)" : "", width: "100%", height: "22vh" }}>
            {/* <img src={loadingImg} alt="No Data Image" style={{ height: "3rem", width: "3rem" }} />
                                                <p className="text-center text-bold text-2xl" style={noDataStyle}>
                                                    Processing...
                                                 </p> */}
            <GloabalLoading />
        </div>


    )
}


export default Loading