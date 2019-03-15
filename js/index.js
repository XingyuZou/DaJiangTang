window.onload = function(){
    var index = 0;                    //获焦索引
    var keyIndex = 0;
    var btnNum = 8;                  //下面五个按钮
    var obj = document.getElementsByClassName("btn");    //序号0-2
    console.log(obj);

    makeBottom();
    function makeBottom(){                      //生成下方的按钮
        var text = " ";
        var bottom = document.getElementsByClassName('bottom');
        var boxUl = document.getElementById('bottomUl');
        if(btnNum > 5){
            bottom[0].style.width = 1100 +'px';
            boxUl.style.width = 220*btnNum + 'px';
            bottom[0].style.left = 98+'px'; 
        }
        else{
            bottom[0].style.width = 220*btnNum + 'px';
            bottom[0].style.left = (1280 - 220*btnNum)/2 + 8 +'px';
        }
        for(var i = 0;i < btnNum;i++){
            text += '<li><img src = "images/img' + i + '.png"/></li>';
        }
        boxUl.innerHTML = text;
    }

    function hidden(key){
        obj[key].style.visibility="hidden";
        return;
    }

    function visible(key){
        obj[key].style.visibility="visible";
        keyIndex = key;
        return;
    }

    function moveBottom(from,to){
        var bottom = document.getElementsByClassName('bottom');
        var items = bottom[0].getElementsByTagName('li');
        var imgs = bottom[0].getElementsByTagName('img');
        if(from == "null"){
            items[0].classList.add('focus');
            imgs[0].src = "images/img"+to+"F.png";
            index = 0;
            return;
        }
        else if(to == "null"){
            items[from].classList.remove('focus');
            imgs[from].src = "images/img"+from+".png";
            index = 0;
            keyIndex = 2;
            return;
        }
        items[from].classList.remove('focus');
        imgs[from].src = "images/img"+from+".png";
        items[to].classList.add('focus');
        imgs[to].src = "images/img"+to+"F.png";
        index = to;
    }
    
    var keyWay = {
        upMove(){
            if(keyIndex == 0){
                return;
            }
            else if(keyIndex == 1||keyIndex == 2){
                hidden(keyIndex);
                visible(keyIndex-1);
                //keyIndex -= 1;
            }
            else if(keyIndex == 3){
                moveBottom(index,"null");
                keyIndex = 2;
                visible(keyIndex);
            }
        },
        downMove(){
            if(keyIndex == 0||keyIndex == 1){
                hidden(keyIndex);
                visible(keyIndex+1);
            }
            else if(keyIndex == 2){
                hidden(keyIndex);
                keyIndex = 3;
                moveBottom("null",0);
            }
        },
        leftMove(){
            if(keyIndex == 3){
                if(index != 0){
                    moveBottom(index,index-1);
                }
                else if(index == 0){
                    moveBottom(0,btnNum-1);
                }
            }
            else{return;}
        },
        rightMove(){
            if(keyIndex == 3){
                if(index != btnNum-1){
                    moveBottom(index,index+1);
                }
                else if(index == btnNum-1){
                    moveBottom(btnNum-1,0);
                }
            }
        }
    }
    console.log(keyIndex);

    document.onkeydown = function (e) {
        var e = e || window.event;
    
        if (e.keyCode == 38) {
          keyWay.upMove();
        } else if (e.keyCode == 40) {
          keyWay.downMove();
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
}