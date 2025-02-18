import { p } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import titleCaseWord from '../../../helper/TitleCaseWord';


const BillHeaderKosmo = ({ billsummary }) => {
    const [formData, setFormData] = useState()
    const [taxSummary, setTaxSummary] = useState([])
    const [footerSummary, setFooterSummary] = useState({
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
    const [supplier, setSupplier] = useState({})


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
        console.log(footerresult, 'footerresultfooterresultfooterresult')
        setFooterSummary(footerresult)

    }

    return (
        <div className="  mx-auto border w-full text-xs p-6 font-sans   ">
            <div className="flex text-xs justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold">{billsummary?.supplierDetails?.name}</h2>
                    {
                        billsummary?.supplierDetails?.address?.split(' ')?.map((add) => (
                            <p>{add}</p>
                        ))
                    }
                    <p>Contact:+{billsummary?.supplierDetails?.phone}</p>
                    <p>Email: {billsummary?.supplierDetails?.email}</p>
                    <p>GSTIN: {billsummary?.supplierDetails?.gstin}</p>
                </div>
                <div className="text-right">
                    <h3 className="text-lg font-bold">TAX INVOICE</h3>
                    <p>Invoice No: {billsummary?.invoiceDetails?.displayId?.slice(billsummary?.invoiceDetails?.displayId?.length - 18)}</p>
                    <p>Dated: {billsummary?.invoiceDetails?.invoiceDate?.split('T')[0].split('-')?.reverse()?.join('-')}</p>
                    <p>Due Date: {billsummary?.invoiceDetails?.invoiceDate?.split('T')[0].split('-')?.reverse()?.join('-')}</p>
                    
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <h4 className="font-semibold mb-2">Bill To</h4>
                    <h2 className="text-xl font-bold">{titleCaseWord(billsummary?.recipientDetails?.name)}</h2>
                    {
                        billsummary?.recipientDetails?.address?.split(' ')?.map((add) => (
                            <p>{titleCaseWord(add)}</p>
                        ))
                    }
                    <p>Contact:+{billsummary?.recipientDetails?.phone}</p>
                    <p>Email: {billsummary?.recipientDetails?.email}</p>
                    <p>GSTIN: {billsummary?.recipientDetails?.gstin}</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Payment Options</h4>
                    
                </div>
                <div className=' flex flex-col justify-end   items-end'>
                    <div className="text-center">
                        <div className="border justify-center items-center flex  h-full border-gray-200 inline-block p-4 rounded-md">
                            <p className="text-sm">QR Code Placeholder</p>
                        </div>
                        <div className="mt-4">
                        <div className="bg-red-100 text-red-600 border border-red-400 px-4 py-1 rounded">Unpaid</div>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BillHeaderKosmo;