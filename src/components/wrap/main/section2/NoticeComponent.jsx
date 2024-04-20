import React from 'react';
import { useDispatch } from 'react-redux';
import { popupAction } from '../../../../store/popupSlice';

export default function NoticeComponent({공지사항}) {

    const dispatch = useDispatch();

    // 팝업창 열기 클릭 이벤트
    // 글목록내용이 제목으로 전송
    // 열기
    const onClickPopupOpen=(e, 공지)=>{
        e.preventDefault();
        const obj = {
            title: 공지,
            show: true
        }
        dispatch(popupAction(obj));
    }

    return (
        <ul>
            {
                공지사항.map((item, idx)=>{
                    return(
                        <li key={item.공지}>
                            <a href="!#" onClick={(e)=>onClickPopupOpen(e, item.공지)} className="popup-btn" title={item.공지}>{item.공지}</a>
                            <span>{item.날짜}</span>
                        </li>
                    )
                })                
            }    
        </ul>
    );
};