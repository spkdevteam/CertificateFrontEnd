import React from "react";

const AccountSummary = () => {
  const invoices = [
    {
      invoiceNo: "INV-25/100010",
      date: "20/01/2025",
      caseId: "N/A",
      invAmount: "₹2000.00",
      discAmount: "₹505.00",
      netAmount: "₹1495.00",
      paidAmount: "₹1000.00",
      dueAmount: "₹495.00",
    },
    {
      invoiceNo: "INV-25/100017",
      date: "21/01/2025",
      caseId: "CS1034889",
      invAmount: "₹250.00",
      discAmount: "₹0.00",
      netAmount: "₹250.00",
      paidAmount: "₹200.00",
      dueAmount: "₹50.00",
    },
  ];

  return (
    <div className="w-full  mx-auto    border    p-6 ">
      <h2 className="text-xl font-bold mb-4">Previous Balance & Payments Details</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-cyan-100 text-white">
              <th className="border p-2">Invoice No.</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Case ID</th>
              <th className="border p-2">Inv. Amount</th>
              <th className="border p-2">Disc. Amount</th>
              <th className="border p-2">Net Amount</th>
              <th className="border p-2">Paid Amount</th>
              <th className="border p-2">Due Amount</th>
            </tr>
          </thead>
          {/* <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{invoice.invoiceNo}</td>
                <td className="border p-2">{invoice.date}</td>
                <td className="border p-2">{invoice.caseId}</td>
                <td className="border text-right p-2">{invoice.invAmount}</td>
                <td className="border text-right p-2">{invoice.discAmount}</td>
                <td className="border text-right p-2">{invoice.netAmount}</td>
                <td className="border text-right p-2">{invoice.paidAmount}</td>
                <td className="border text-right p-2 text-red-500 font-bold">{invoice.dueAmount}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
      {/* <p className="mt-4 font-semibold">Amount Due (in words): <span className="italic">Five Hundred and Forty Five Only.</span></p>
      <p className="text-red-600 font-bold text-lg">Total Outstanding Amount: ₹545.00</p> */}
      
      <h3 className="mt-6 font-bold">Terms & Conditions:</h3>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>All disputes are subject to Hyderabad Jurisdiction.</li>
        <li>Payment should be made within 7 days from the date of invoice, Interest @ 12% will be charged on all invoices after the due date.</li>
        <li>We declare that this invoice shows the actual amount of products or services described and that all particulars are true and correct.</li>
      </ul>
      
      <p className="mt-6 font-bold text-right">For <span className="text-blue-600">Kosmo Dental Clinic</span></p>
      <p className="text-right italic">Authorized Signature</p>
    </div>
  );
};

export default AccountSummary;
