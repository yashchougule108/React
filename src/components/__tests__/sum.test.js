import { sum } from "../sum ";
test("Sum Function",()=>{
    const result=sum(3,4);
    //assertion
    expect(result).toBe(5);

});
