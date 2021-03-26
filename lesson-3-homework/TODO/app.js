document.getElementsByTagName("button")[0].onclick = add
//禁止提交表单时页面刷新(其实不太明白为什么一定要写这句，但不写就是不行)
document.getElementsByTagName('form')[0].setAttribute('onsubmit', 'return false')

function add(){
    var input = document.getElementsByTagName("input")[0].value;
    var ul = document.getElementsByTagName("ul")[0]
    if(input === '')
        return
    var li = document.createElement('li');
    li.innerHTML = '<button class="fork" type="button" onclick="remove(this)"><strong>×</strong></button>\
    <input type="checkbox" onclick="done(this)"><label>'+ input +'</label>';
    ul.appendChild(li);
    document.getElementById('clear').parentElement.style.display = 'block';//显示控件
    document.getElementsByTagName("input")[0].value = ""; //清空输入框
}

function remove(button){
    //直接删除父标签li
    button.parentNode.remove();
}
function done(checkbox){
    var task = checkbox.nextSibling;//取出紧邻的元素
    //检查任务是否被选中
    if(checkbox.checked){
        task.style.textDecoration = "line-through"
        task.style.color = "#ff0000"
    }
    else {
        task.style.textDecoration = "none"
        task.style.color = "#2f4f4f"
    }
}
document.getElementById('clear').onclick = clear
function clear(){
    var ul = document.getElementsByTagName("ul")[0].innerHTML = '';//直接清除ul标签下所有的内容
    document.getElementById('clear').parentElement.style.display = 'none';//隐藏控件
}

