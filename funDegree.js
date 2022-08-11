function converToK(temperature)
{
    return temperature + 273;
}
function convertTemp(temperature, conversionUnit)
{
    conversionUnit === 'k' ? console.log(temperature + 273) : console.log(temperature - 273) ;
}
// if(conversionUnit ==='K')
    // {
    //     return temperature + 273;
    // }
    // else if(conversionUnit === 'C')
    // {
    //     return temperature - 273;
    // } 
    // else 
    // {
    //     console.log('Invalid Conversion Unit')
    //     return -1;
    // }