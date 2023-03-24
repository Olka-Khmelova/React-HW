import React, { useContext } from "react";
import { Context } from '../Main';
import Input from "../Input/Input";
import './ThirdStep.css'


const inputs = [
    {id: 1,
    name: "Avatar",
    type: "file",
    accept: "image/png, image/jpeg"

},
]
const defaulAvatars = ['/default_avatar/dzobs.png', '/default_avatar/funny_man.png', '/default_avatar/freak.png', '/default_avatar/girl.png', '/default_avatar/hacker.png', '/default_avatar/pirat.png', '/default_avatar/rudy.png', '/default_avatar/monster.png', '/default_avatar/nice.png']

const ThirdStep = () => {
    const {state, dispatch} = useContext(Context);
    console.log(state)
    return (
        <>
            {inputs.map(input => <Input key={input.id} {...input} accept={input.accept} />) }
            <div className="default_img">
                {defaulAvatars.map(avatar=> 
                <img 
                key={avatar}
                className="default_avatar_img" 
                alt="avatar"
                src={avatar} 
                onClick={(e) => dispatch({
                    type: 'AVATAR-INPUT',
                    payload: {avatar: avatar,}
                })
                }/>
                )}
            </div>
        </>
        )
}

export default ThirdStep