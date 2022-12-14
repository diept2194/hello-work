// em làm 2 cách ạ
let a = prompt('Nhập a:');
let b = prompt('Nhập b:');
let tong = 0;
for (let i= 10; i <= 30; i++) {
    let dem = 0;
    for(let j = 2;j <= i;j++){
        if(i % j ==0){
            dem++;
        }
    }
    if(dem <= 1){
        console.log(i)
        tong = tong + i
    }  
}
console.log('Tổng các số nguyên tố từ :',a,'den ',b,'=',tong);

function check_snt(n){
    let flag= true;
    if (n < 2){
        flag = false;
    }
    else{
        for (let i = 2; i < n-1; i++){
            if (n % i == 0){
                flag = false;
                break;
        }
        }
    }

    if (flag == true){
        document.write(n + " là số nguyên tố <br/>");
    }
    else{
        document.write(n + " không phải là số nguyên tố <br/>");
    }

}