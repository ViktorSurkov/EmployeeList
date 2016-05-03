function add() {
    var empFirstNames = [];
    var empLastNames = [];
    var Sal = [];
    var avSal = 0;
    var cur = 0;
    var empNames = document.getElementsByClassName('employeeFirstName');
    for (var i = 0; i < empNames.length; i++) {
        empFirstNames.push(empNames[i].innerText);
    }
    empNames = document.getElementsByClassName('employeeLastName');
    for (var i = 0; i < empNames.length; i++) {
        empLastNames.push(empNames[i].innerText);
    }
    empNames = document.getElementsByClassName('employeeSalary');
    for (var i = 0; i < empNames.length; i++) {
        Sal.push(empNames[i].innerText);
    }
    for (var i = 0; i < Sal.length; i++) {
        cur += +Sal[i].slice(1);
    }
    avSal = cur / Sal.length;

    console.log(empFirstNames);
    console.log(empLastNames);
    console.log(avSal);

    var Name = document.getElementById("Name").value;
    var Surname = document.getElementById("Surname").value;
    var Salary = document.getElementById("Salary").value;
    var Position = document.getElementById("Position").value;
    var limit = document.getElementById('limitNumb').value;
    var status = true;

    if (empFirstNames.length < limit) {
        if (Name == undefined) {
            alert('Plese, fill up all fields.')
        }
        if (Surname == undefined) {
            alert('Plese, fill up all fields.')
        }
        if (Salary == undefined) {
            alert('Plese, fill up all fields.')
        }
        if (Position == undefined) {
            alert('Plese, fill up all fields.')
        }
        for (var i = 0; i <= empFirstNames.length; i++) {
            var nameV = empFirstNames[i];
            if (nameV == Name) {
                alert('User ' + Name + ' already exist!');
                status = false;
            }
        }
        for (var i = 0; i <= empLastNames.length; i++) {
            if (empLastNames[i] == Surname) {
                alert('User ' + Surname + ' already exist!');
                status = false;
            }
        }
        if (avSal > 2000) {
            alert('Avarage salary is bugger 2000, sorry')
            status = false;
        }
        if (status == true) {
            addFin();
        }
    } else {
        alert('Out Of limit')
    }


    function addFin() {

        var ul = document.getElementById("employeeList");
        var li = document.createElement("li");

        var SpanName = document.createElement('span')
        SpanName.setAttribute("class", "employeeFirstName");
        SpanName.innerHTML = Name;
        li.appendChild(SpanName);

        var SpanSurname = document.createElement('span')
        SpanSurname.innerHTML = Surname;
        SpanSurname.setAttribute("class", "employeeLastName");
        li.appendChild(SpanSurname);

        var SpanSalary = document.createElement('span')
        SpanSalary.innerHTML = '$' + Salary;
        SpanSalary.setAttribute("class", "employeeSalary");
        li.appendChild(SpanSalary);

        var SpanPosition = document.createElement('span')
        SpanPosition.innerHTML = Position;
        SpanPosition.setAttribute("class", "employeePosition");
        li.appendChild(SpanPosition);

        ul.appendChild(li);

        var avarageSalary = document.getElementById("avarageSalary");
        avarageSalary.innerHTML = avSal;

        var numberEmp = document.getElementById("numberEmp");
        numberEmp.innerHTML = empFirstNames.length;
    }

}
