let height = document.querySelector('.personheight');
let weight = document.querySelector('.personweight');
let submit = document.querySelector('.submitData');
let result = document.querySelector('.content ul');



var data = JSON.parse(localStorage.getItem('listDataBMI')) || [];


submit.addEventListener('click', calcu, false);

function calcu(e){
    e.preventDefault();
    // alert('5566');
    // bmiCalculate();
    addData(e);
}


// function bmiCalculate(){
//     let weightNum = weight.value;
//     let heightNum = (height.value)/100;
//     let bmiresult = (weightNum / (heightNum * heightNum)).toFixed(2);
//     console.log(bmiresult); 
    
//     let final = '<li>你的BMI是<span>'+ bmiresult +'</span>   體重<span>'+ weight.value +'</span>kg   身高<span>'+ height.value +'</span>cm</li>';
//     result.innerHTML = final;

//     ABC();
// }



// function ABC(){
//     alert('www');
// }


//加入列表，並同步更新網頁與 localstorage
let bmiresult = 0;
let colorclass = 0;

function addData(e) {
    e.preventDefault();

    let weightNum = weight.value;
    let heightNum = (height.value)/100;
        bmiresult = (weightNum / (heightNum * heightNum)).toFixed(2);  
    console.log(bmiresult); 

    let health = 0;
        colorclass = 0;
    if (bmiresult<18.5){
        alert('過輕');
        health = '過輕';
        colorclass = 'blue'; 

    }else if(bmiresult<24 && bmiresult>=18.5){
        alert('標準')
        health = '標準';
        colorclass = 'green'; 

    }else if(bmiresult<27 && bmiresult>=24){
        alert('過重')
        health = '過重';
        colorclass ='orange'; 
        
    }else{
        alert('肥胖')
        health = '肥胖';  
        colorclass = 'red';      
    };

    
    let final = '<li class="'+ colorclass+'">'+health+' &emsp;&emsp;你的BMI是<span>'+ bmiresult +'</span>   體重<span>'+ weight.value +'</span>kg   身高<span>'+ height.value +'</span>cm &emsp;&emsp;';
    // result.innerHTML = final; 

    var txt = final;
    var todo = {
      content: txt
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listDataBMI', JSON.stringify(data));
    
  }

  // 更新網頁內容
  function updateList(items) {
    str = '';
    var len = items.length;
    for (var i = 0; len > i; i++) {
      str += items[i].content+'<a href="#" data-index=' + i + ' />刪除此筆</a></li>' ;
    }
    result.innerHTML = str;
    console.log('第二次'+bmiresult);
  }


  // 刪除 某一筆資料
  let card = document.querySelector('.content .card');
  card.addEventListener('click', toggleDone);

  function toggleDone(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listDataBMI', JSON.stringify(data));
    updateList(data);
  }



//清除全部資料 clearALL()
let clearAll = document.querySelector('.clearlink');
clearAll.addEventListener('click', clearALL , false);

function clearALL(e){
   localStorage.clear(e);
   alert('全部都清空了');
   result.innerHTML = '<li>全部都清空了</li>';
   
}



