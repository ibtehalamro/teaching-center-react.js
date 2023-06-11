export const getDateFromTimeStamp = (timeStamp) =>{
    
return timeStamp ?new Date(timeStamp).toLocaleDateString():"--/--/----" ;

}