const calc = () => {
    let a1 = document.getElementById('sub1').value;
    let a2 = document.getElementById('sub2').value;
    let a3 = document.getElementById('sub3').value;
    let a4 = document.getElementById('sub4').value;
    let a5 = document.getElementById('sub5').value;

    if (a1 > 100 || a2 > 100 || a3 > 100 || a4 > 100 || a5 > 100) {
        alert("please enter the correct marks");
    } else {
        let totalmarks = parseFloat(a1) + parseFloat(a2) + parseFloat(a3) + parseFloat(a4) + parseFloat(a5);
        document.getElementById('marksobt').innerHTML = totalmarks;
        // return false;
        // console.log(totalmarks);


        let grade = 'N';
        if (500 >= totalmarks && 450 < totalmarks)
            grade = 'A+';
        else if (450 >= totalmarks && 400 < totalmarks)
            grade = 'A';
        else if (400 >= totalmarks && 350 < totalmarks)
            grade = 'B+';
        else if (350 >= totalmarks && 300 < totalmarks)
            grade = 'B';
        else if (300 >= totalmarks && 250 < totalmarks)
            grade = 'c';
        else if (250 >= totalmarks && 200 < totalmarks)
            grade = 'D';
        else
            grade = 'F';
        // console.log(grade);
        document.getElementById('gra').innerHTML = grade;
        // return false;

        let roundper = (totalmarks / 500) * 100;
        let percentage=roundper.toFixed(1);
        console.log(percentage);
        document.getElementById('percent').innerHTML = percentage + " %";
        // return false;

        let Result = " ";
        if (grade == 'F')
            Result = "Fail";
        else
            Result = "Pass";
        document.getElementById('resu').innerHTML = Result;
        return false;

    }

}
