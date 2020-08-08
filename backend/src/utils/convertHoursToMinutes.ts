export default function convertHourToMinutes(time:String){
    const aux = time.split(':');
    return parseInt(aux[1]) + parseInt(aux[0])*60
}