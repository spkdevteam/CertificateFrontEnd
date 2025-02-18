import useDynamicIcons from "../../Hooks/useDynamicIcons"


const Leave = ({ booking }) => {
    const getMyIcon = useDynamicIcons()
    const Leave = getMyIcon('leave')


    return <div className=" h-full gap-2 p-2 flex-nowrap overflow-hidden  flex w-full text-red-900 rounded-md  items-center justify-start ">
        <Leave className='h-5 w-5 ' />  {'Leave  :' + booking?.slotFrom.split('T')[1].slice(0, 5)}-{booking?.slotTo.split('T')[1].slice(0, 5) }
    </div>
}

export default Leave




// {
//     "_id": "675afdd032612884eeb65255",
//     "bookingType": "appointment",
//     "bookingId": "KC-AB-2024-BK100046",
//     "date": "2024-12-05T00:00:00.000Z",
//     "slotFrom": "2024-12-05T10:00:00.000Z",
//     "slotTo": "2024-12-05T10:30:00.000Z",
//     "cancelled": false,
//     "bUnit": {
//         "name": "Mohammad Aquib Businsenss Unit",
//         "_id": "673ef64bdc1355e6ca2e61eb"
//     },
//     "branch": {
//         "name": "ADDA branch",
//         "_id": "6736e43eecc4dfe280f90d03"
//     },
//     "doctor": {
//         "name": "cheif_doc",
//         "_id": "674430638739bf79034a931d"
//     },
//     "dentalAssistant": {
//         "name": "Dental",
//         "_id": "6746f53687bafb123ffb22a5"
//     },
//     "patient": {
//         "name": "patient",
//         "_id": "6746c52824de581b301fddfd"
//     },
//     "chair": {
//         "_id": "67371a9a964d59372c4336f8",
//         "location": "First floor",
//         "number": "o1"
//     }
// }