
$(function () {
                alert(1)
                $.ajax({
                    type: "GET",
                    url: "result.json",
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        for (var i = 0; i < data.length; i++) {
                            alert(data[i].optionKey)
                            var trTD = "<tr><td>" + data[i].optionKey + "</td><td>" + data[i].optionValue + "</td></tr>";
                            $("#tb").append(trTD);
                        }
                        var test = "<tr><td>第s一个</td><td>第s二个</td></tr>"
                        $("#tb").append(test)
                    },
                    error:function(data){
                        alert("error")
                        console.log(data,'错误')
                    }

    });
});
