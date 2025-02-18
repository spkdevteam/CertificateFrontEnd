function generateCaseSummary(data) {
    if (!data) return "No data available.";

    // Summarize Chief Complaints
    const chiefComplaintsSummary = data.cheifComplaints?.map((complaint) => {
        const teeth = complaint.tooth.join(", ");
        const complaints = complaint.complaints.map((comp) => comp.compId?.complaintName).join(", ");
        return `Teeth: ${teeth}; Complaints: ${complaints}`;
    }) || ["No chief complaints provided."];

    // Summarize Treatment Plan
    const treatmentPlanSummary = data.treatmentData?.map((treatment) => {
        return treatment?.description || "Treatment details not provided.";
    }) || ["No treatment plan provided."];

    // Summarize Clinical Findings
    const clinicalFindingsSummary = data.clinicalFindings?.map((finding) => {
        return finding?.description || "Clinical finding details not provided.";
    }) || ["No clinical findings provided."];

    // Summarize Procedures
    const proceduresSummary = data.procedures?.map((procedure) => {
        return procedure?.procedureName || "Procedure details not provided.";
    }) || ["No procedures provided."];

    // Combine summaries
    return {
        chiefComplaints: chiefComplaintsSummary,
        treatmentPlan: treatmentPlanSummary,
        clinicalFindings: clinicalFindingsSummary,
        procedures: proceduresSummary,
    };
}

export default generateCaseSummary
