import { useEffect } from "react"
const CerticateView = ({ value }) => {
    useEffect(() => {
        console.log(value, 'selectedCertificateselectedCertificateselectedCertificate')
    }, [value])
    return (
        <div className="w-full h-full">
            {console.log(value?.certificateNumber)}
            {value?.certificateNumber}

        </div>
    )
}

export default CerticateView