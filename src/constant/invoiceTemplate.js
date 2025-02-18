const billSummary = {
    invoiceDetails: {
      displayId: ``,
      invoiceDate: new Date()
    },
    supplierDetails: {
      name:"",
      lastName:"",
      gstin:"",
      address:"",
      _id:""
    },
    recipientDetails: {
      _id:"",
      firstName: "",
      lastName:" ",
      gstin: " ",
      address: " "
    },
    placeOfSupply: "",
    reverseCharge: false,
    itemDetails: [ 
    ],
    taxDetails: {
      totalTaxableValue:0,
      totalCGST: 0,
      totalSGST: 0,
      totalIGST: 0,
      totalCess: 0
    },
    totalAmount: {
      totalValue: 0,
      inWords: ``
    },
    netAmount: {
      totalValue:0,
      inWords: ``
    },
    discount:0,
    signature: " ",
    createdBy:" ",
    _id:""
  }

export default billSummary