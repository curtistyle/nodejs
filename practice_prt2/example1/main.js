var index;  // variable to set the selected row indexs
var table_len;
function getSelectedRow()
{
    var table = document.getElementById("table");
    table_len = table.rows.length

    for(var i = 1; i < table.rows.length; i++)
    {
        
        table.rows[i].onclick = function()
        {
            // clear the selected from the previous selected row
            // the first time index is undefined
            if(typeof index !== "undefined"){
                table.rows[index].classList.toggle("table-danger");
                
            }
            
            index = this.rowIndex;
            
            

            this.classList.toggle("table-danger");

        };
    }
        
}

getSelectedRow();

function changeNumer(direction, element){
    if (direction === "up"){
        var num = this.index - 1;
            
        if (num > 0){
            element[this.index].cells[0].innerText = num.toString();
            num = this.index;
            element[this.index - 1].cells[0].innerText = num.toString(); 
        }
    }
    
    if (direction === "down"){
        var num = this.index + 1;

        if (num < table_len){
            element[this.index].cells[0].innerText = num.toString();
            num = this.index;
            element[this.index + 1].cells[0].innerText = num.toString(); 
        }

    }
}


function upNdown(direction)
{
    //console.log("upNdown: ",index)
    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;
        
        if(direction === "up"){
        
            // var num = this.index - 1;
            // if (num > 0){
            //     rows[this.index].cells[0].innerText = num.toString();
            //     num = this.index;
            //     rows[this.index - 1].cells[0].innerText = num.toString();
            // } 
            
            changeNumer("up",rows)
    
        if(index > 1){
            parent.insertBefore(rows[index],rows[index - 1]);
            // when the row go up the index will be equal to index - 1

            index--;
        }
    }
    
    if(direction === "down"){
        
        // var num = this.index + 1
        // if (num < table_len){
        //     rows[this.index].cells[0].innerText = num.toString()
        //     num = this.index;
        //     rows[this.index + 1].cells[0].innerText = num.toString();
        // }

        changeNumer("down",rows)

        if(index < rows.length - 1){
            parent.insertBefore(rows[index + 1],rows[index]);
            // when the row go down the index will be equal to index + 1
            
            index++;
        }
    }
}