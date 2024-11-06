import React from "react";

// 일반 함수
export function FuncCom() {
    return (
        <>
        <div>
            함수형 컴포넌트
        </div>
        </>
    )
}

// 화살표 함수
export const ArrowFuncCom = () => {
    return (
        <>
            <div>
                화살표 함수형 컴포넌트
            </div>
        </>
    )
}


export default {
    FuncCom,
    ArrowFuncCom,
};