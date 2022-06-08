import moment from "moment"



export const time = ( date ) =>{

    const todayMounth = moment( date );

    return todayMounth.format('HH:mm a | MMMM Do');
    //console.log( date )
}