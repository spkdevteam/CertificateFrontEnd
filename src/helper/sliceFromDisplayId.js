
const sliceFromDisplayId = (value)=>{
    
    
    return value ?  value?.split('-').slice(2).join('-') :value 
}

export default sliceFromDisplayId