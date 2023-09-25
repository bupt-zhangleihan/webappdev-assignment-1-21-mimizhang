/* console.log('打印文件');
*/
//计算三角形面积
//p=a+b+c   S=[(p-a)(p-b)(p-c)p]开根号
//三角形计算公式
console.log('计算三角形面积和识别素数')
function triange_S(a,b,c){
    let p=(a+b+c)/2;
    let S_abc=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(`三角形的长宽高为${a}，${b}，${c}`)
    console.log(`面积为${S_abc}`);

}
triange_S(3,4,5);
 


//打印两个数之间的素数
function prime_number(a,b){
    //创建从c-b的数组
    let arr=[];
    let c=a;
    for (let i=c;i<=b;i++){
        arr.push(i);
    }
   // console.log(arr);


    //数组创建好了，开始循环
    let e=a;
    while(e<=b){
        for (let i=2;i<e;i++){
            if(e%i==0){
                arr=arr.filter(item=>item!=e);
            }
        }
        e=e+1;

    }
    console.log(`以下是${a}到${b}之间的素数\n${arr}`)

}
prime_number(10,15)

 