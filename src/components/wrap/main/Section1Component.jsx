import React from 'react';
import SlideComponent from './section1/SlideComponent';
import axios from 'axios';

export default function Section1Component(){

    const [state, setState] = React.useState({
        슬라이드: []
    })

    React.useEffect(()=>{

        axios({
            url: './data/slide.json',
            method: 'GET'
        })
        .then((res)=>{
            
            if( Object.keys(res.data).includes('슬라이드')){
                setState({
                    ...state,
                    슬라이드: res.data.슬라이드
                })
            }

        })
        .catch((err)=>{
            console.log( err );
        });

    },[])


    return (
        <section id="section1">
            {/* 슬라이드컴포넌트 */}
            <SlideComponent 슬라이드={state.슬라이드} />

        </section>
    );
};