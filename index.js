let content = " <span class='counter'></span> <div class='course-code'><label>Course<br> Code</label><br><input type='text' placeholder='22CSR'></div>     <div class='course-credit'><label>Course<br> Credit</label><br><input type='number' placeholder='2'><br></div> <div class='grade'><label>Grade<br>Scored</label><br><input type='text' placeholder='A'></div>";


let button = document.getElementById("button");
let sign_no = 1;
// input.addEventListener("focus", appendOnOutput, false);

button.addEventListener("click", fun, false);

function fun(){
    let div = document.createElement("div");
    div.setAttribute("class", "container");
    div.innerHTML = content;
    let form = document.getElementById("form-output");
    form.appendChild(div);
    div.querySelector('.counter').textContent = sign_no;
    sign_no++;
}

let delete_button = document.getElementById("delete-button");

delete_button.addEventListener("click", delete_fun, false);

function delete_fun(){
   var div=  document.getElementById("form-output").lastElementChild;

   console.log(div);
   document.getElementById("form-output").removeChild(div);
   sign_no--;
}

let calculate_cgpa = document.getElementById("calculate-cgpa");

calculate_cgpa.addEventListener("click", calculate, false);

function calculate(){
    let cgpa_numerator = 0;
    let cgpa_denominator = 0;
    let form = document.getElementById("form-output");
    let divs = form.querySelectorAll(".container");
    divs.forEach(parent => {
        let credit = parent.querySelector(".course-credit").querySelector("input");
        // console.log(credit.value);
        let grade = parent.querySelector(".grade").querySelector("input");
        let gradePoints = getGradePoints(grade.value);
        // console.log(gradePoints);
        cgpa_numerator += (gradePoints * credit.value);
        cgpa_denominator += parseInt(credit.value);

        console.log(cgpa_numerator + " " +  cgpa_denominator);
    });
    let result = cgpa_numerator / cgpa_denominator;
    let p = document.getElementById("result");
    p.textContent +=result.toFixed(2);
}

  
function getGradePoints(grade){
    switch(grade){
        case 'O':
            return 10;
        case 'A+':
            return 9;
        case 'A':
            return 8;
        case 'B+':
            return 7;
        case 'B':
            return 6;
        case 'C':
            return 5;
        default:
            return 0;
    }
}

