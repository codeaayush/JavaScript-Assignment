const store = [
	{ country: 'USA', cases: '2142515', new_cases: '291', deaths: '11753' },
	{ country: 'Brazil', cases: '850796', new_cases: '0', deaths: '42791' },
	{ country: 'Russia', cases: '528964', new_cases: '8835', deaths: '6948' },
	{ country: 'India', cases: '322777', new_cases: '1151', deaths: '9206' },
	{ country: 'UK', cases: '294375', new_cases: '0', deaths: '41662' }
];

//total_cases
const users = store.map(item => {
    const container = {};
    container.total_cases= parseInt(item.cases) + parseInt(item.new_cases);
    return container;
})
    

console.log(users);

//no-covid_case
function no_covid(num){
    if(num.new_cases==0){
        //alert(num.country);
        return num.country;
    }
}

const no = store.filter(no_covid);
console.log(no);

//Add a column

 store.forEach(function(item,i){
    var total_cases= parseInt(item.cases) + parseInt(item.new_cases);
    var death_per =(parseInt(item.deaths)/parseInt(total_cases))*100;
    //alert(total_cases);
    store[i]["percentage"] = death_per;
     
});
console.log(store);



//add a new row

store.push({ country: "Spain", cases: "300000", new_cases: "0", deaths: 27136 });

console.log(store);

