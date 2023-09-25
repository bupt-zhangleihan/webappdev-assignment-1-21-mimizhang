console.log('第三次作业')

//已经有的学生分数
let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  //合格的学生分数列表
  let studentsWhoPass = [];


/* //为ABCD进行排序
let ABlist=['A','A-','B-','C','C-','D','D-'];
ABlist.sort(
    (a,b)=>{//这里（a,b)就是相当于设计了一个无名的函数
        const MYSORT=['A','A-','B','B-','C','C-','D','D-']//定义我们的排序条件
        return ABlist.indexOf(a)-ABlist.indexOf(b)//返回正，就是b>a,返回负值，a>b;
        //indexof(a)，就是值a在ABlist里面的第几个

    }
)
console.log(ABlist)
 */

let passedABCD=['A','A-','B','B-','C'];
for (let i=0;i<allStudents.length;i++){
    if(allStudents[i]>=3){
        studentsWhoPass.push(allStudents[i]);
    }
    //需要对ABCD等级进行排序再判断是不是几个
    //也可以不用排序，因为现有数据较小，可以设计及格数列
    else if(passedABCD.includes(allStudents[i])){
        studentsWhoPass.push(allStudents[i]);
    };

}
console.log(`及格的分数有:${studentsWhoPass}`)