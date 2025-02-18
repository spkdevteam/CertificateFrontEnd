import React, { useEffect, useState } from 'react';


const BillFooter = ({ billsummary }) => {
  const [formData, setFormData] = useState()
  const [taxSummary, setTaxSummary] = useState([])
  const [footerSummary,setFooterSummary] = useState({hsnSacCode: 0,
    taxPercentage: 0,
    totalTaxableValue: 0,
    totalTaxValue: 0,
    cgst: 0,
    sgst: 0,
    igst: 0,
    cgstPercentage: 0,
    sgstPercentage: 0,
    igstPercentage: 0})

  useEffect(() => {
    console.log(billsummary, 'billsummarybillsummary')
    setFormData(billsummary)
    CalculateTaxSummary(billsummary?.itemKart)
  }, [billsummary])

  const CalculateTaxSummary = (kart = []) => {
    const result = kart.reduce((acc, item) => {
      // Create a unique key based on hsnSacCode and tax percentage
      const taxPercentage = ((item.cgst + item.sgst + item.igst) / item.taxableValue) * 100;
      const key = `${item.hsnSacCode}_${taxPercentage}`;

      // If this group already exists, sum the taxable value and tax value, otherwise create it
      if (acc[key]) {
        acc[key].totalTaxableValue += item.taxableValue;
        acc[key].totalTaxValue += item.cgst + item.sgst;
      } else {
        acc[key] = {
          hsnSacCode: item.hsnSacCode,
          taxPercentage: taxPercentage,
          totalTaxableValue: item.taxableValue,
          totalTaxValue: item.cgst + item.sgst,
          cgst: item.cgst,
          sgst: item.sgst,
          igst: item.igst,
          cgstPercentage: (item.cgst / item.taxableValue) * 100,
          sgstPercentage: (item.sgst / item.taxableValue) * 100,
          igstPercentage: (item.igst / item.taxableValue) * 100,


        };
      }


      return acc;
    }, {});

    const groupedResult = Object.values(result);
    console.log(groupedResult, 'groupedResult')
    setTaxSummary(groupedResult)
    const footerresult = groupedResult?.reduce((cum, item) => ({
      hsnSacCode: (cum.hsnSacCode || 0) + (item.hsnSacCode || 0),
      taxPercentage: (cum.taxPercentage || 0) + (item.taxPercentage || 0),
      totalTaxableValue: (cum.totalTaxableValue || 0) + (item.totalTaxableValue || 0),
      totalTaxValue: (cum.totalTaxValue || 0) + (item.totalTaxValue || 0),
      cgst: (cum.cgst || 0) + (item.cgst || 0),
      sgst: (cum.sgst || 0) + (item.sgst || 0),
      igst: (cum.igst || 0) + (item.igst || 0),
      cgstPercentage: (cum.cgstPercentage || 0) + (item.cgstPercentage || 0),
      sgstPercentage: (cum.sgstPercentage || 0) + (item.sgstPercentage || 0),
      igstPercentage: (cum.igstPercentage || 0) + (item.igstPercentage || 0)
    }), {
      hsnSacCode: 0,
      taxPercentage: 0,
      totalTaxableValue: 0,
      totalTaxValue: 0,
      cgst: 0,
      sgst: 0,
      igst: 0,
      cgstPercentage: 0,
      sgstPercentage: 0,
      igstPercentage: 0
    })
    console.log(footerresult,'footerresultfooterresultfooterresult')
    setFooterSummary(footerresult)

  }

  return (
    <div className='    w-full flex flex-col   '>
       
      <table className="border-dashed border-black border       table-fixed w-full">
        <thead className="  h-12">
          <tr className=" ">
            <th className="border-dashed border-black border        w-1/3 text-left px-2">Bank Details:</th>
            <th colSpan="2" className="border-dashed border-black border        text-left px-2">TAX Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" ">
            <td className=" border-dashed border-black border       w-1/3 px-2">Your Bank Details Here</td>
            <td colSpan="2" className="         w-full  ">
              <table className='w-full text-xs '>
                <thead>
                  <tr className='w-full text-right border-gray-800   border-dashed border  h-12'>
                    <th className='border-gray-800   border-dashed border  h-full'  >HSN SAC</th>
                    <th className='border-gray-800   border-dashed border  h-full'> TAXABLE  </th>
                    <th className='border-gray-800   border-dashed border  h-full'>TAX %</th>
                    <th colSpan='2' className='h-12   '>
                      <div className='w-full   items-center     h-full flex flex-col'>
                        <p className='h-full w-full justify-center border-gray-800   border-dashed border-b flex'>IGST</p>
                        <div className='h-full w-full justify-between     flex   '>
                          <p className='w-1/2      text-center'>
                            %
                          </p>
                          <p className='w-1/2  border-gray-800   border-dashed border-s    text-center'>
                            Amt
                          </p>
                        </div>
                      </div>
                    </th>
                    <th colSpan='2' className='    border-gray-800   border-dashed border  h-12'>
                      <div className='w-full   items-center      h-full flex flex-col'>
                        <p className='h-full w-full justify-center border-gray-800   border-dashed border-b flex'>CGST</p>
                        <div className='h-full w-full justify-between     flex   '>
                          <p className='w-1/2      text-center'>
                            %
                          </p>
                          <p className='w-1/2  border-gray-800   border-dashed border-s    text-center'>
                            Amt
                          </p>
                        </div>
                      </div>
                    </th>

                    <th colSpan='2' className='h-12    '>
                      <div className='w-full   items-center     h-full flex flex-col'>
                        <p className='h-full w-full justify-center border-gray-800   border-dashed border-b flex'>SGST</p>
                        <div className='h-full w-full justify-between     flex   '>
                          <p className='w-1/2      text-center'>
                            %
                          </p>
                          <p className='w-1/2  border-gray-800   border-dashed border-s    text-center'>
                            Amt
                          </p>
                        </div>
                      </div>
                    </th>
                    <th className='border-gray-800   border-dashed border-s    items-center flex justify-center h-12  '>Total</th>
                  </tr>
                </thead>
                <tbody>

                  {/* data need to fill here  */}
                  {
                    taxSummary?.map((item) => (<tr className='w-full text-right border-gray-800   border-dashed border h-10    '>
                      <td className='border-gray-800   border-dashed border  h-full '  >{item?.hsnSacCode?.toUpperCase()}</td>
                      <td className='border-gray-800   border-dashed border  '>{parseFloat(item?.totalTaxableValue)?.toFixed(2)}  </td>
                      <td className='border-gray-800   border-dashed border   '>{parseFloat(item?.taxPercentage)?.toFixed(2)}</td>
                      <td colSpan='2' className='    h-10  '>
                        <div className='w-full   items-center     h-full flex  '>


                          <p className='w-1/2      text-center'>
                            {parseFloat(item?.igstPercentage)?.toFixed(2)}
                          </p>
                          <p className='w-1/2  border-gray-800   border-dashed border-s    text-center'>
                            {parseFloat(item?.igst)?.toFixed(2)}
                          </p>

                        </div>
                      </td>
                      <td colSpan='2' className='  h-10  border-gray-800   border-dashed border   '>
                        <div className='w-full   items-center      h-full flex  '>


                        <p className='w-1/2      text-center'>
                            {parseFloat(item?.cgstPercentage)?.toFixed(2)}
                          </p>
                          <p className='w-1/2  border-gray-800   border-dashed border-s    text-center'>
                            {parseFloat(item?.cgst)?.toFixed(2)}
                          </p>
                        </div>
                      </td>

                      <td colSpan='2' className='  h-10   '>
                        <div className='w-full   items-center     h-full flex  '>


                        <p className='w-1/2      text-center'>
                            {parseFloat(item?.sgstPercentage)?.toFixed(2)}
                          </p>
                          <p className='w-1/2  border-gray-800   border-dashed border-s    text-center'>
                            {parseFloat(item?.sgst)?.toFixed(2)}
                          </p>
                        </div>

                      </td>
                      <td className='h-10 border-gray-800   border-dashed border-s  items-center flex justify-center    '> {parseFloat(item?.totalTaxableValue+item?.totalTaxValue)?.toFixed(2)}</td>
                    </tr>

                    ))
                  }



                  {/* data fill end here  */}
                </tbody>
                <tfoot>
                  {
                     
                  
                  }
                  <tr className='w-full text-right border-black    border-dashed border h-10    '>
                    <th className='border-black    border-dashed border  h-full '  > </th>
                    <th className='border-black    border-dashed border  '> {footerSummary?.totalTaxableValue} </th>
                    <th className='border-black    border-dashed border   '> </th>
                    <th colSpan='2' className='    h-10  '>
                      <div className='w-full   items-center     h-full flex  '>


                        <p className='w-1/2      text-center'>
                        
                        </p>
                        <p className='w-1/2  border-black    border-dashed border-s    text-center'>
                        {footerSummary?.igst}
                        </p>

                      </div>
                    </th>
                    <th colSpan='2' className='  h-10  border-black    border-dashed border   '>
                      <div className='w-full   items-center      h-full flex  '>


                        <p className='w-1/2      text-center'>
                        
                        </p>
                        <p className='w-1/2  border-black    border-dashed border-s    text-center'>
                        {footerSummary?.cgst}
                        </p>

                      </div>
                    </th>

                    <th colSpan='2' className='  h-10   '>
                      <div className='w-full   items-center     h-full flex  '>


                        <p className='w-1/2      text-center'>
                         
                        </p>
                        <p className='w-1/2   border-black   border-dashed      text-center'>
                        {footerSummary?.sgst}
                        </p>
                      </div>

                    </th>
                    <th className='h-10    border-black  border-dashed border-s  items-center flex justify-center    '>{footerSummary?.totalTaxableValue + footerSummary?.totalTaxValue}</th>
                  </tr>
                </tfoot>

              </table>
            </td>
          </tr>
          <tr className=" ">
            <td className="  px-2 text-left">
            </td>
            <td colSpan="2" className="h-10 border-dashed  border-black border   px-2 text-left">
              Tax Summary: Add tax summary details here.
            </td>
          </tr>
        </tbody>
      </table>

    </div >
  );
};

export default BillFooter;