import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ChallengeUI = (props) => { 
    const [time, setTime] = useState();
    const [detail, setDetail] = useState('');
    const [img, setImg] = useState('');
    const [imgStyle, setImgStyle] = useState({});
    const [imgWrapStyle, setImgWrapStyle] = useState({});

    const navigate = useNavigate();
    
    useEffect(() => {
        setTime(props.time);
        if (props.detail){
            setDetail(props.detail);
        }
        else {
            setDetail('X')
        }
        
        setImg(props.img);

        if (props.etc === 'top'){
            setImgStyle({
                width: '30px', height: '30px',
                borderRadius: '22px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
            });
            setImgWrapStyle({
                width: '50px', height: '50px',
                paddingRight: '5px'
            });
        }
        else{
            setImgStyle({
                width: '50px', height: '50px',
                borderRadius: '50px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover'
            });
            setImgWrapStyle({
                width: '50px', height: '50px',
            })
        }

    }, [props.time, props.img, props.detail, props.etc, img])
    
    return (
        <div className='Challenge' onClick={() => {
            if (props.etc === 'main'){
                navigate('/certify')
            }
            else{
                navigate(`/detail/${props.pageId}`)
            }
            }}>
            
            <div className='challengeContent'>
                <div className='challengeImgWrap' style={imgWrapStyle}>
                    <div className='challengeImg' style={imgStyle}></div>
                </div>
                <div className='challengeInfoWrap'>
                    <div className='challengeName'><b>{time}시간</b> 챌린지</div>
                    <div className='challengeDetail'>{detail}</div>
                </div>
            </div>
            
        </div>
  );
};

export default ChallengeUI;