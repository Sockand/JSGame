function readCSV(theUrl, rows, index){
    isBBDDprocesing=true;
    $.ajax({
        type: "GET",
        url: theUrl,
        async: false,
        dataType: "text",
        success: function(data) {processData(data, rows, index);}
     });
    /* To force syncronous the main thread has to wait to ajax */
    while(isBBDDprocesing){
        sleep(20);
    }
}
/* Process CSV data */
function processData(allText, nextFunc, index) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                /* This one is in debug velues */
                //tarr.push(headers[j]+":"+data[j]);
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    if(nextFunc=="items"){
        tmp_item = {id : lines[index][0], name : lines[index][1], descr : lines[index][2], type : lines[index][3], img : lines[index][4], atk : lines[index][5], df : lines[index][6], spd : lines[index][7], qat : 0};
    }
console.log(lines);
console.log(tmp_item.id);
isBBDDprocesing=false;
}