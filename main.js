function sort(){
    let arrayInput = document.querySelector("#array").value;

    console.log(arrayInput);
    let points = arrayInput.split(",");
    document.querySelector("#mainArray").innerHTML = "The original array is " + points;

    function numSort(arrayName) {
        for (var i=0; i <= arrayName.length; i++)   {
            const arrayTwo = arrayName.map(myFunc);
        }

        function myFunc(values, index, arrray){
            if(Number(arrayName[index]) < Number(arrayName[index + 1])){
                let temp = arrayName[index];
                console.log(typeof(temp));
                arrayName[index] = arrayName[index + 1];
                arrayName[index + 1] = temp;
            }
        }
        return arrayName;
    }

    


    let sorted = numSort(points);

    document.querySelector("#sorted").innerHTML = "The sorted array is " + sorted;

    document.querySelector("#longest").innerHTML = "The highest number in the array is " + sorted[0];

}