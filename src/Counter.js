//액션 타입
const INCREAMENT = "increament";
const DECREAMENT = "decreament";

//액션
export const increament = (num = 1) => {
    return({
        type : INCREAMENT, 
        payLoad : num
    });
} 
//액션
export const decreament = (num = 1) => {
    return({
        type : DECREAMENT, 
        payLoad : num
    });
}

//의존성 주입 = 외부에 의해 내부의 데이터가 변경
//reducer 
const init = { number : 0 }
//action이 위 액션 함수의 return 값이 들어감
export default function (state = init, action) {
    switch (action.type) {
        case INCREAMENT :
            return({...state, number : state.number + action.payLoad}); //...state는 state에 있는 모든 변수가 들어감

        case DECREAMENT :
            return({...state, number : state.number - action.payLoad}); //...state는 state에 있는 모든 변수가 들어감

        default:
            return(state);
    }
}