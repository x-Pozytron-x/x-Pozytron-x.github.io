 window.onload = function() {
    var table = document.querySelector('#tsort');
    var tbody = document.querySelector('#tsort tbody');
    var rows = tbody.querySelectorAll('tr'); 
    var theadTitles = document.querySelectorAll("#tsort thead tr td"); 
    var mainArray = [];  
    getTableData();
    theadTitles.forEach(function(td, ID, theadTitles){
    	td.onclick = main(ID);
    });
    function main (id){
    	return function() {
    		mainArray.sort(sortByField(id));  
    		displayAfterSort();
    	}
    }
    function getTableData() {
        rows.forEach(function(tr, key, rows) {
            var rowData = tr.querySelectorAll('tbody td'); 
                var arr2 = [];    
            for (x=0;x<rowData.length;x++) {
                arr2[x] = rowData[x].innerText; 
            } 
                mainArray[key] = arr2;   
        });
    }
    function sortByField(field) {
        return function (a, b) {
            return a[field] > b[field] ? 1 : -1;
        }
    }
    function displayAfterSort(){
    tbody.innerHTML = '';
        for (i=0;i<mainArray.length;i++) {
            var newTr = document.createElement('tr');
            for (y=0;y<mainArray[0].length;y++) {
                var newTd = document.createElement('td');
                newTd.innerText = mainArray[i][y];
                newTr.appendChild(newTd);
            }
            tbody.appendChild(newTr);
        }
    }
}
