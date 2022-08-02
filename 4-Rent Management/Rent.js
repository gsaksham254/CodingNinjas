let Flats=[{
    flatNumber:120,
    tenantName:"Saket",
    totalRent:20000 ,
    rentPaid:18000

},
{
    flatNumber:121,
    tenantName:"Saksham",
    totalRent:15000,
    rentPaid:15000
},
{
    flatNumber:122,    
    tenantName:"Shivam",
    totalRent:25000,
    rentPaid:25000
},
{   
    flatNumber:123,
    tenantName:"Sakar",
    totalRent:18000 ,
    rentPaid:15000

},
{
    flatNumber:124,
    tenantName:"Harsh", 
    totalRent:24000 ,
    rentPaid:24000
}];

total_earning=0;
 rent_Pending=0;

 for(let flat of Flats){
    //calculating total earning.
     total_earning=flat.rentPaid+total_earning;

     //calculating rent left.
     flat.rent_left=flat.totalRent-flat.rentPaid;

     //calculatng rent pending.
     rent_Pending=flat.rent_left+rent_Pending;

          console.log(flat);
//calculating rent defaulters.
flat.rent_defaulter=flat.rent_left >0 ? `Flat Number:${flat.flatNumber}, Tenant Name:${flat.tenantName}, Rent Due:${flat.rent_left}`:"";

};

console.log("1:-List of tenant's who not paid fill rent are:")
for(let flat of Flats){
console.log(flat.rent_defaulter);
}
console.log("2:-Total rent that he has earned from all tenant's are:Rs."+total_earning);
console.log("3:-New entry added of rent pending(#rent_left) on each tenant data.");
console.log("4:-Total rent pending from all tenant's are:Rs."+rent_Pending);