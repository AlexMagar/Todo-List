//jshint esversion:6

exports.getDate = function(){
    const today = new Date();

    const options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return today.toLocaleDateString("en-GB", options);

};


//other way of doing
module.exports.getDay = getDay;
function getDay(){
    const today = new Date();

    const options ={
        weekday: "long"
    };

    const day = today.toLocaleDateString("en-GB", options);

    return day;
}