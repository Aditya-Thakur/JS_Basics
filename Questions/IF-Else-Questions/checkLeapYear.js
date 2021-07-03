let year=1900;

if( (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
    console.log("Given year "+ year + " is leap year");
}else{
    console.log("Given year "+ year +" is not a leap year" );
}

