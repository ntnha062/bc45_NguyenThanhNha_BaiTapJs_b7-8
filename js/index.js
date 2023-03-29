

var arrNumber = []

document.getElementById('btnThemMang').onclick = function(){

    var soNhap = +document.getElementById('mang').value;

    arrNumber.push(soNhap);

    document.getElementById('arrNumber').innerHTML = arrNumber;
}

//Bài 1 
function tinhTongDaySoDuong(){
    var tongSoDuong = 0;

    for(var index = 0; index < arrNumber.length; index++){
        if(arrNumber[index] >= 0){
            tongSoDuong += arrNumber[index];
        }
    }
    return tongSoDuong;
}

document.getElementById('btnTinhTong').onclick = function(){
    document.getElementById('tongSoDuong').innerHTML = tinhTongDaySoDuong();
}

//Bài 2
function deSoDuong(){
    var count = 0;

    for(var index = 0; index < arrNumber.length; index++){
        if(arrNumber[index] > 0){
            count++;
        }
    }

    return count;
}

document.getElementById('btnDem').onclick = function(){
    document.getElementById('soDuong').innerHTML = deSoDuong();
}

//Bài 3
function timSoNhoNhat(){
    var soNhoNhat = arrNumber[0];

    for(var index = 0; index < arrNumber.length; index++){
        if(arrNumber[index] < soNhoNhat ){
            soNhoNhat = arrNumber[index];
        } 
    }

    return soNhoNhat;
}

document.getElementById('btnTimSoNho').onclick = function(){
    document.getElementById('soNhoNhat').innerHTML = timSoNhoNhat();
}

//Bài 4
function timSoDuongNhoNhat(){
    var soNhoNhat = arrNumber[0];

    for(var index = 0; index < arrNumber.length; index++){
        if(arrNumber[index] < soNhoNhat && arrNumber[index] > 0){
            soNhoNhat = arrNumber[index];
        }
    }

    return soNhoNhat;
}

document.getElementById('btnTimSoDuongNho').onclick = function(){
    document.getElementById('soDuongNhoNhat').innerHTML = timSoDuongNhoNhat();
}

//Bài 5
function timSoChanCuoiCung(){
    var soChan = 0;

    for(var index = 0; index < arrNumber.length; index++){
        if(arrNumber[index] % 2 === 0){
            soChan = arrNumber[index]
        }else{
            soChan = -1;
        }
    }

    return soChan;
}

document.getElementById('btnTimSoChan').onclick = function(){
    document.getElementById('soChan').innerHTML = timSoChanCuoiCung();
}

//Bài 6
function doiViTri(){
    var temp = 0;
    viTri1 = +document.getElementById('viTri-1').value;
    viTri2 = +document.getElementById('viTri-2').value;

    temp = arrNumber[viTri1]; 
    arrNumber[viTri1] = arrNumber[viTri2]; 
    arrNumber[viTri2] = temp;

    return arrNumber;
}

document.getElementById('btnDoiCho').onclick = function(){
    document.getElementById('kq-bai6').innerHTML = doiViTri();
}

//Bài 7
function sapXepTangDan(){
    return arrNumber.sort(function(a, b){return a - b});;
}

document.getElementById('btnSapXep').onclick = function(){
    document.getElementById('mangDaSapXep').innerHTML = sapXepTangDan();
}

//Bài 8
function kiemTraNguyenTo(so){
    if(so <= 1) {
        return false;
    }
    for(var index = 2; index <= Math.sqrt(so); index++){
        if(so % index === 0){
            return false;
        }
    }
    return true
}

function timSoNguyenToDauTien(){
   for(var index = 0; index < arrNumber.length; index++){
        if(kiemTraNguyenTo(arrNumber[index])){
            return arrNumber[index];
        }
    }
    return -1;
}

document.getElementById('btnTimSoNT').onclick = function(){
    document.getElementById('soNTDauTien').innerHTML = timSoNguyenToDauTien();
}

//Bài 9
document.getElementById('btnThemSoThuc').onclick = function(){
    var soThuc = +document.getElementById('soThuc').value;

    arrNumber.push(soThuc);

    document.getElementById('newArrNumber').innerHTML = arrNumber;
}

function demSoNguyen(){
    var count = 0;
    for(var index = 0; index <= arrNumber.length; index++){
        if(Number.isInteger(arrNumber[index])){
            count++;
        }
    }
    return count;
}

document.getElementById('btnDemSoNguyen').onclick = function(){
    document.getElementById('soNguyen').innerHTML = demSoNguyen();
}

//Bài 10
function demSoNguyenAmDuong(){
    var countp = 0;
    var countn = 0;
    var result = '';
    for(var index = 0; index < arrNumber.length; index++){
        if(arrNumber[index] > 0){
            countp++;
        }else{
            countn++
        }
    }

    if(countp > countn){
        result = 'Số dương nhiều hơn'
    }else if(countp < countn){
        result = 'Số âm nhiều hơn'
    }else{
        result = 'Âm Dương hài hòa'
    }

    return result;
}

document.getElementById('btndemSoNguyenAmDuong').onclick = function(){
    document.getElementById('soNguyenAmDuong').innerHTML = demSoNguyenAmDuong();
}