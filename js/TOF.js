var list0 = new Array();                 //农民培训页一级菜单列表

var txt1 = {
    "all":[
        {"info":[
            "产业布局","技能培训","政策解读1","政策解读2","政策解读3","政策解读4","政策解读5","产业布局" 
        ]},
        {"info":[
            "省级专家","贵阳","遵义","安顺","六盘水","黔东南","黔西南","黔南","毕节"
        ]},
        {"info":[
            "用工信息1","用工信息2","用工信息3","用工信息4"
        ]},
        {"info":[
            "互动交流","互动交流"
        ]}
    ]
};

var txt2 = {
    "all":[
        {
            "Title":"产业布局",
            "data":[
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
                {"Name":"默认海报","imgSrc":"images/hb.png"},
            ]
        },
        {
            "Title":"省级专家",
            "data":[
            {"Name":"水果","imgSrc":"images/shuiguo.png"},
            {"Name":"蔬菜","imgSrc":"images/shucai.png"},
            {"Name":"食用菌","imgSrc":"images/shiyongjun.png"},
            {"Name":"养殖","imgSrc":"images/yangzhi.png"},
            {"Name":"中药材","imgSrc":"images/zhongyaocai.png"},
            {"Name":"茶叶","imgSrc":"images/chaye.png"},
            {"Name":"其他","imgSrc":"images/qita.png"},
            ]
        }
    ]
}

var firstIndex = 0;                      //一级菜单索引
var secondIndex = 0;                     //二级子菜单索引
var secondListShow = 6;                  //二级菜单展示条数
var thirdIndex = 0;                      //三级子菜单索引
var maxThird = 0;
var index = 0;                           //列表索引 0一级、1二级、2三级
var n = Array();                               //一级列表下项目数量

for(var i = 0;i < txt1.all.length;i++){
    n[i] = txt1.all[i].info.length;
}

console.log(n);

var box = document.getElementById("list0");
list0 = box.getElementsByTagName("li");

makeSecondList();
function makeSecondList(){
    for(i = 1;i <= 4;i++){
        var box2 = document.getElementsByClassName("list1");
        var makeDiv = document.createElement('div');
        var makeList = document.createElement('ul');
        makeList.id = "list" + i;
        box2[0].appendChild(makeDiv);
        makeDiv.appendChild(makeList);
        if(67*n[i-1] <= 720){                   //若二级列表高度小于屏幕高度，设置上边距
            makeDiv.style.top = (720-67*n[i-1])/2 + "px";
        }
        else{
            makeDiv.style.top = 100 + "px";
            makeDiv.style.height = 520 + "px";
        }
        for (j = 0;j < n[i-1];j++){
            var makeNode = document.createElement('li');
            var makeNodeImg = document.createElement('img');
            var makeNodeText = document.createElement('span');
            makeNodeImg.src = "images/bt21.png";
            var thisTxt = txt1.all[i-1].info[j];
            makeNodeText.innerText = thisTxt;
            makeList.appendChild(makeNode);
            makeNode.appendChild(makeNodeImg);
            makeNode.appendChild(makeNodeText);
        }
    }
}

createRight();
function createRight(){
    var right = document.getElementById('right');
    var rightUl = document.createElement('ul');
    maxThird = txt2.all[0].data.length;
    var textItem = '';
    for(i = 0;i < maxThird;i++){
        textItem += '<li><img src=' + txt2.all[0].data[i].imgSrc +'></li>'
    }
    right.appendChild(rightUl);
    rightUl.innerHTML = textItem;
    rightUl.id = "ul" + 0;
    rightUl.style.display = "block";
    // else if(item == txt2.all[1].Title){
    //     var rightUl = document.createElement('ul');
    //     maxThird = txt2.all[1].data.length;
    //     for(i = 0;i < maxThird;i++){
    //         var makeItem = document.createElement('li');
    //         var makeItemImg = document.createElement('img');
    //         makeItemImg.src = txt2.all[1].data[i].imgSrc;
    //         rightUl.appendChild(makeItem);
    //         makeItem.appendChild(makeItemImg);
    //     }
    //     right.appendChild(rightUl);
    //     rightUl.style.display = "none";
    // }


    // var item = txt1.all[firstIndex-1].info[secondIndex];
    // var rightUl = document.getElementById('rightList');
    // if(item == txt2.all[0].Title){
    //     maxThird = txt2.all[0].data.length;
    //     for(i = 0;i < maxThird;i++){
    //         var makeItem = document.createElement('li');
    //         var makeItemImg = document.createElement('img');
    //         makeItemImg.src = txt2.all[0].data[i].imgSrc;
    //         rightUl.appendChild(makeItem);
    //         makeItem.appendChild(makeItemImg);
    //     }
    // }
    // else if(item == txt2.all[1].Title){
    //     maxThird = txt2.all[1].data.length;
    //     for(i = 0;i < maxThird;i++){
    //         var makeItem = document.createElement('li');
    //         var makeItemImg = document.createElement('img');
    //         makeItemImg.src = txt2.all[1].data[i].imgSrc;
    //         rightUl.appendChild(makeItem);
    //         makeItem.appendChild(makeItemImg);
    //     }
    // }
    
}

// function removeThird(){
//     var rightUl = document.getElementById('rightList');
//     var child = rightUl.getElementsByTagName('li');
//     var m = child.length;
//     for(i = 0;i < m;i++){
//         rightUl.removeChild(child[0]);
//     }
// }

function moveFirstFocus(from,to){
    var imgfrom = list0[from].getElementsByTagName("img");
    imgfrom[0].src = "images/bt11.png";
    list0[from].classList.remove("focus");
    var imgto = list0[to].getElementsByTagName("img");
    imgto[0].src = "images/bthj.png";
    list0[to].classList.add("focus");
    var listfrom = document.getElementById("list"+from);
    var listto = document.getElementById("list"+to);
    if(to != 0 && from != 0){
        listfrom.style.display = "none";
    }
    else{
        listfrom.style.display = "block";
    }
    listto.style.display = "block";
    firstIndex = to;    
}

function moveSecondFocus(from,to){
    var box1 = document.getElementById("list"+firstIndex);
    var list1 = box1.getElementsByTagName('li');
    var imgfrom = list1[from].getElementsByTagName('img');
    if(to == "null"){
        imgfrom[0].src = "images/bt21.png";
        list1[from].classList.remove("focus");
    }
    else{
        var imgto = list1[to].getElementsByTagName("img");
        imgfrom[0].src = "images/bt21.png";
        list1[from].classList.remove("focus");
        imgto[0].src = "images/bt2hj.png";
        list1[to].classList.add("focus");
        secondIndex = to;
    }
}

function moveThirdFocus(from,to){
    var rightUl = document.getElementById("ul0");
    var rightList = rightUl.getElementsByTagName("li");
    if(to == "null"){
        rightList[from].classList.remove("focus");
        thirdIndex = 0;
        return;
    }
    else if(from == "null"){
        rightList[0].classList.add("focus");
        thirdIndex = 0;
        return;
    }
    else{
        rightList[from].classList.remove("focus");
        rightList[to].classList.add("focus");
        thirdIndex = to;
    }
}

var keyWay = {
    upMove(){
        if(index == 0){
            if(firstIndex == 0){
                return;
            }
            else{
                moveFirstFocus(firstIndex,firstIndex-1);
            }
        }
        else if(index == 1){
            if(secondIndex == 0){
                moveSecondFocus(0,n[firstIndex-1]-1);
            }
            else{
                moveSecondFocus(secondIndex,secondIndex-1);
            };
        }
        else if(index == 2){
            if(thirdIndex < 3){
                return;
            }
            else{
                moveThirdFocus(thirdIndex,thirdIndex-3);
                document.getElementById('right').scrollBy(0,-260);
            }
        }
    },
    downMove(){
        if(index == 0){
            if(firstIndex == 4){
                return;
            }
            else{
                moveFirstFocus(firstIndex,firstIndex+1);
            }
        }
        else if(index == 1){
            if(secondIndex == n[firstIndex-1]-1){
                moveSecondFocus(n[firstIndex-1]-1,0);
            }
            else{
                moveSecondFocus(secondIndex,secondIndex+1);
            }
        }
        else if(index == 2){
            if(thirdIndex <= maxThird-4){
                moveThirdFocus(thirdIndex,thirdIndex+3);
                document.getElementById('right').scrollBy(0,260);
            }
            else if(thirdIndex > maxThird-4&&thirdIndex < maxThird){
                moveThirdFocus(thirdIndex,maxThird-1);
                document.getElementById('right').scrollBy(0,260);
            }
        }
        else{
            return
        }
    },
    leftMove(){
        if(index == 0){
            return;
        }
        else if(index == 1){
            index = 0;
            moveSecondFocus(secondIndex,"null");
            secondIndex = 0;
        }
        else if(index == 2 && thirdIndex != 0){
            moveThirdFocus(thirdIndex,thirdIndex - 1);
            if(thirdIndex%3 == 2){
                document.getElementById('right').scrollBy(0,-260);
            }
        }
        else if(index ==2 && thirdIndex == 0){
            return;
        }
    },
    rightMove(){
        if(index == 0 && firstIndex == 0){
            return;
        }
        else if(index == 0){
            index = 1;
            moveSecondFocus(secondIndex,secondIndex);
        }
        else if(index == 1){
            index = 2;
            moveThirdFocus("null",thirdIndex);
            var y = 260*thirdIndex;
            document.getElementById('right').scrollTo(0,y);
        }
        else if(index == 2 && thirdIndex < maxThird-1){
            moveThirdFocus(thirdIndex,thirdIndex+1);
            if(thirdIndex % 3 == 0){
                document.getElementById('right').scrollBy(0,260);
            }
        }
        else{
            return;
        }
    },
    doConfirm(){
        if(index == 1){
            index = 2;
            moveThirdFocus("null",0);
            document.getElementById('right').scrollTo(0,0);
        }
        else{return;}
    },
    doReturn(){
        if(index == 2){
            index = 1;
            moveThirdFocus(thirdIndex,"null");
        }
        else{
            return;
        }
    }
}

document.onkeydown = function (e) {
    var e = e || window.event;

    if (e.keyCode == 38) {
      keyWay.upMove();
      return false;
    } else if (e.keyCode == 40) {
      keyWay.downMove();
      return false;
    } else if (e.keyCode == 37) {
      keyWay.leftMove();
    } else if (e.keyCode == 39) {
      keyWay.rightMove();
    } else if (e.keyCode == 13) {
      keyWay.doConfirm();
    } else if (e.keyCode == 8) {
      keyWay.doReturn();
    } else if (e.keyCode == 458) {
      keyWay.doMenu();
    } else if (e.keyCode >= 48 && e.keyCode <= 57) {
      keyWay.doNumberKey(e.keyCode - 48);
    }
}