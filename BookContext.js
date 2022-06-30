import React, { createContext, useReducer, useContext, useRef } from 'react';
const initalbooks = [
    {
        id:1,
        title:"작별인사",
        writer:"김영하",
        year:"2022년"
    },
    {
        id:2,
        title:"마음의 법칙",
        writer:"폴커 키츠",
        year:"2022년"
    },
    {
        id:3,
        title:"기분을 관리하면 인생이 관리된다",
        writer:"김다슬",
        year:"2022년"
    },    
    {
        id:4,
        title:"무엇이 옳은가",
        writer:"후안 엔리케스",
        year:"2022년"
    },
    {
        id:5,
        title:"주린이가 가장 알고 싶은 최다질문 TOP 77",
        writer:"염승환",
        year:"2021년"
    },
    {
        id:6,
        title:"미드나잇 라이브러리",
        writer:"매트 헤이그",
        year:"2021년"
    },
    {
        id:7,
        title:"소크라테스 익스프레스",
        writer:"에릭 와이너",
        year:"2021년"
    },
    {
        id:8,
        title:"달러구트 꿈 백화점 2",
        writer:"이미예",
        year:"2021년"
    },
    {
        id:9,
        title:"공정하다는 착각",
        writer:"마이클 샌델",
        year:"2020년"
    },
    {
        id:10,
        title:"2030 축의 전환",
        writer:"마우로 기옌",
        year:"2020년"
    },
    {
        id:11,
        title:"기분이 태도가 되지 않게",
        writer:"레몬심리",
        year:"2020년"
    },
    {
        id:12,
        title:"공정하다는 착각",
        writer:"마이클 샌델",
        year:"2020년"
    },
    {
        id:13,
        title:"여행의 이유",
        writer:"김영하",
        year:"2019년"
    },
    {
        id:14,
        title:"철학은 어떻게 삶의 무기가 되는가",
        writer:"야마구치 슈",
        year:"2019년"
    },
    {
        id:15,
        title:"아주 작은 습관의 힘",
        writer:"제임스 클리어",
        year:"2019년"
    },
    {
        id:16,
        title:"인어가 잠든 집",
        writer:"히가시노 게이고",
        year:"2019년"
    }
];
function BookReducer(state, action) {
    switch(action.type){
        case 'CREATE':
        return state.concat(action.book);
        case 'REMOVE':
        return state.filter(book=> action.id !== book.id );
        default:
        return state;
    }
}
const BookStateContext = createContext();
const BookDispatchContext = createContext();
const BookNextIdContext = createContext();


export function BookProvider({ children }) {
    const [ state, dispatch ] = useReducer(BookReducer, initalbooks);
    const nextId= useRef(17);
    return (
        <BookStateContext.Provider value={state}>
            <BookDispatchContext.Provider value={dispatch}>
                <BookNextIdContext.Provider value={nextId}>
                {children};
                </BookNextIdContext.Provider>
            </BookDispatchContext.Provider>
        </BookStateContext.Provider>
    )
}

export function useBookState() {
    return useContext(BookStateContext);
}
export function useBookDispatch() {
    return useContext(BookDispatchContext);
}
export function useBookNextId() {
    return useContext(BookNextIdContext);
}