import React from 'react';
import Icon from '../images/index.png'
const Profile=(props)=>{
    return(
        <section>
            <h1 className="d">My Profile</h1>
            <img className="e" style={{width:'100px',borderRadius:'100px'}} src={Icon}/>
            <section>
                <p className="f">First Name:</p>
                <p className="g">{props.name}</p>
            </section>
            <section>
                <p className="h">Last Name:</p>
                <p className="i">{props.lastname}</p>
            </section>
            <section>
                <p className="j">Age:</p>
                <p className="k">{props.age}</p>
            </section>
            <section>
                <p className="l">Job:</p>
                <p className="m">{props.job}</p>
            </section>
            <section>
                <p className="n">Email:</p>
                <p className="o">{props.email}</p>
            </section>
            <section>
                <p className="p">Phone Number:</p>
                <p className="q">{props.phonenumber}</p>
            </section>
            <section>
                <p className="r">Hobbies:</p>
                <p className="s">{props.hobbies}</p>
            </section>
            <section>
                <p className="t">Education:</p>
                <p className="u">{props.education}</p>
            </section>
            
            
        </section>

    )
}
export default Profile;