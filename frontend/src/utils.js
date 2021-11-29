export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase(); //example of hash would be /#/page or /#/page/other
    const request = url.split("/"); //Split will create an array with every element whenever a "/" is found
    console.log(request)
    return {
        resource: request[1], //request[1] is the 'Product' word
        id: request[2],       //request[2] is the id number of the product
        verb: request[3],   //request[3] is the 
    } 
}
