const templateinvoiceSummary =
{
    invoiceDetails: {
        displayId: null,
        invoiceDate: new Date()?.toISOString(),
        _id: null
    },
    supplierDetails: {
        name: null,
        lastName: null,
        gstin: null,
        address: null
    },
    recipientDetails: {
        firstName: null,
        displayId: null,
        lastName: null,
        gstin: null,
        address: null
    },
    placeOfSupply: null,
    stateCode: null,
    reverseCharge: false,

    taxDetails: {
        totalTaxableValue: 0,
        totalCGST: 0,
        totalSGST: 0,
        totalIGST: 0,
        totalCess: 0
    },
    totalAmount: {
        totalValue: 0,
        inWords: `${0} Only`
    },
    netAmount: {
        totalValue: 0,
        inWords: `${0} Only`
    },
    itemKart: [],
    discount: 0,
    signature: null,
    createdBy: null
}
