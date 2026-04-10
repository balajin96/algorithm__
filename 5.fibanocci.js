function fibanocci(x) {

    let prev = 0, curr = 1, next;
    const res = [];
    for (let i=0; i<=x; i++){
        res.push(prev);
        next= prev+curr;
        prev=curr;
        curr=next;
    }
    return res;

}
console.log(fibanocci(10))