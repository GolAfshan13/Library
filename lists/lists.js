

var table = document.getElementById('display-table');
var cells = table.getElementsByTagName('td');

for (var i = 0; i < cells.length; i++) {
    // Take each cell
    var cell = cells[i];
    // do something on onclick event for cell
    cell.onclick = function () {
        // Get the row id where the cell exists
        var rowId = this.parentNode.rowIndex;

        var rowsNotSelected = table.getElementsByTagName('tr');
        for (var row = 0; row < rowsNotSelected.length; row++) {
            rowsNotSelected[row].style.backgroundColor = "";
            rowsNotSelected[row].classList.remove('selected');
        }
        var rowSelected = table.getElementsByTagName('tr')[rowId];

        if (rowSelected.cells[0].innerHTML != 0 ){
            rowSelected.style.backgroundColor = "yellow";
            rowSelected.className += " selected";
        }

        // msg = 'The ID of the company is: ' + rowSelected.cells[0].innerHTML;
        // msg += '\nThe cell value is: ' + this.innerHTML;
        // alert(msg);
        
    }
}

let books = [
    {
        record : '1',
        ISBN : '9876543210133',
        bName : '504 واژه ی کاملا ضروری',
        englishName : '504 absolutely essential words',
        bWriter : 'عبدالله قنبری',
        englishWriter : '',
        translator : '',
        publicSpecification : ' تهران : جنگل، جاودانه ، 1391',
        pages : '372',
        publisher : 'جنگل',
        subject1 : 'زبان انگلیسی',
        subject2 : '',
        subject3 : '',
        inStock : ''
    },
]

const X = document.querySelectorAll('.ISBN');
for (let i=0 ; i<2 ; i+=1){
    console.log(X[i].innerHTML);
}


document.querySelector('#bSearchButton').addEventListener('click',()=>{
    mySearch = document.querySelector('#bSearch').value  ;
    const searchType = document.querySelector('select').value;
    const max = books.length ;
    
    let i = 0 ;
    while (i<max){
        console.log(mySearch)
        console.log(searchType)
        console.log(books[i].bWriter)
        if (mySearch === books[i][searchType]){
            console.log('YES')
            document.querySelector('tr').innerHTML = 
            `
            <link rel="stylesheet" href="lists.css">
                <tr>
                <td>${books[i].record} </td>
                <td>${books[i].ISBN}</td>
                <td>${books[i].bName}</td>
                <td>${books[i].englishName}</td>
                <td>${books[i].bWriter}</td>
                <td>${books[i].englishWriter}</td>
                <td>${books[i].translator}</td>
                <td>${books[i].publicSpecification}</td>
                <td>${books[i].pages}</td>
                <td>${books[i].publisher}</td>
                <td>${books[i].subject1}</td>
                <td>${books[i].subject2}</td>
                <td>${books[i].subject3}</td>
                <td>${books[i].inStock}</td>
                </tr>
            `;
        }
        i+=1

    } 
})
