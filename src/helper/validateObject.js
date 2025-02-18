

const validateMandatoryFields = (obj,mandatoryField) => {
    const invalidFields = [];
  
    for (const field of mandatoryField) {
      if (typeof field === "object") {
        const [key, type] = Object.entries(field)[0];
        // Check if the key exists and its type matches
        if (!obj.hasOwnProperty(key)) {
        //   invalidFields.push({ field: key, error: "Field is missing" });
        } else if (typeof obj[key] !== type.name?.toLowerCase()) {
          invalidFields.push({
            field: key,
            // error: `Expected type ${type.name}, got ${typeof obj[key]}`,
          });
        }
      } else if (typeof field === "string") {
        // Check if the field exists in the object
        if (!obj.hasOwnProperty(field)) {
        //   invalidFields.push({ field, error: "Field is missing" });
        }
      }
    }
  
    return invalidFields;
  };

  export default validateMandatoryFields
  