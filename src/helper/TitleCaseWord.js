function titleCaseWord(input='') {
    return input ?  input?.split(' ') 
      .map(word => word?.charAt(0).toUpperCase() + word?.slice(1)?.toLowerCase()) // Capitalize the first letter of each word
      .join('') :''
  }

  export default titleCaseWord