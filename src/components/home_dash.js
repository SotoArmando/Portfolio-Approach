import React, { useEffect, useState } from 'react';
import Mobile_display from './mobile_display';
import img_0 from '../res/svg/email.svg'
import Sendmail from '../containers/sendmail';
import Projectl from '../containers/projectl';
import Projectm from '../containers/projectm';


export default function Home_dash(props) {
    let [load, setload] = useState(false);

    useEffect(() => {
        if (!load) {
            // document.querySelector('body').style.margin = '';
            // document.querySelector('body').style.width = '';
            // document.querySelector('#app > div.nav > div.nav_body.row').style.borderRight = '';
            // document.querySelector('#root').style.backgroundColor = ''
            setload(true);
        }
    })

    return <div className="col back_2">
        <div className="row basis_44 corebox_18 ">
            <div className="col pad_33 center items_start mobilepad_l24">
                <div className="col start items_center">
                    {/* <div className="nice_circle_0" ></div> */}
                    <div className="col  f_4 m_f_3 f700 ls_27 lh_2 corebox_9 row center maxedcorebox_x15">
                        <span className="col ffam_0">
                            <span className=" fore_11">Hey There. I'm Armando.</span>
                            <span className=" color_1 ">I'm Full-Stack Developer student at Microverse</span>
                            {/* <span className="none_unless_1024">Mobile app developer hobbyist</span> */}
                            {/* <span className="none_unless_1024">Ambitious product designer of it own ideas</span> */}
                        </span>
                    </div>
                    <span className="f400 f_1 fore_14 ls_28 lh_3 row center corebox_9 maxedcorebox_x15">
                        <span>
                            Hi, I'm Armando, a developer living at <span className="span_3">Santo Domingo</span>.  <span className="span_3">Currently open for job opportunities</span>. I enjoy building mobile apps and games. Look over some of my work! If you have anything precious to code don't hesitate letting me know.
                        </span>
                    </span>
                    <div className="row start items_center corebox_5 ">
                        <a href="https://www.linkedin.com/in/asotomelo/" className="svg linkedin mar_r25" />
                        <a href="https://github.com/SotoArmando" className="svg github corebox_x3" />
                        <a href="https://twitter.com/sotoarmando029" className="svg twitter corebox_x3" />
                        <a href="https://stackoverflow.com/users/5007444/sotoarmando" className="svg stack-overflow corebox_x3" />
                    </div>
                    {/* <Sendmail /> */}
                </div>

            </div >
            <Mobile_display />
        </div >

        <div className="corebox_19 col pad_l33 pad_r33 mobilepad_l24 mobilepad_r21 border_01 center items_center border_02 overflowhidden">
            <div className="col allsize">
                <span className=" f800 fore_11 row start items_center corebox_5  ls_27 lh_2 ffam_0 f_3 ">Some Work</span>
                <div className="row wrap basis_44 corebox_12 start items_center mar_b23 nmar_l20 nmar_r20 ">
                    <Projectl isLast={true} name={"Muffinsmastermind"} pic="pic_mastermind_0"  tags={["HTML/CSS","REACT","ES6"]}/>
                    <Projectl isFirst={true} name={"Sotoarmandobrainspace"} pic="pic_e" tags={["HTML/CSS","REACT","ES6"]} />
                </div>
                <div className="row wrap basis_44 corebox_12 start items_center nmar_l20 nmar_r20 ">
                    <Projectm isFirst={true} name={"Brilliant"} pic="pic_brilliant_0" tags={["UNITY","C#"]} />
                    <Projectm name={"Codicookingtimer"}  pic="pic_codi_0" tags={["PYTHON","KIVY"]} />
                    <Projectm isLast={true} name={"Budgetboy"} tags={["ANDROID","JAVA"]} pic="pic_budget_0"/>
                </div>
            </div>
        </div>
        <div className="corebox_15 row pad_l33 pad_r33 mobilepad_l27 mobilepad_r21 border_01 center items_center border_02 overflowhidden basis_45 center" >
            <div className="col allsize">
                <span className=" f800 fore_11 row start items_center corebox_5  ls_27 lh_2 ffam_0 f_3 ">About Me</span>
                <div className="row wrap basis_46  start items_center    ">
                    <span className="col center items_start ">
                        <span className="maxedcorebox_x15 ffam_0 f600  ls_27  lh_3 f_0  ffam_0">
                            Anime, coding, always look on cooking feed. Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.
                        </span>
                        {/* <div className="corebox_8 row start items_center">
                            <Sendmail />
                        </div> */}
                    </span>
                    <span></span>
                </div>

            </div>
            <div className="row center">
                <img className="maxedcorebox_x5"  src={"https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/SmallerMicroverselogo_revised/original.jpg?1581442029"} />
            </div>
        </div>

        <div className="corebox_15 col pad_l33 pad_r33 mobilepad_l24 mobilepad_r21 border_01 center items_center border_02 overflowhidden">
            <div className="col allsize">
                <span className=" f800 fore_11 row start items_center corebox_5  ls_27 lh_2 ffam_0 f_3 ">Publications</span>

                <div className="row wrap basis_44 corebox_12 start items_center nmar_l20 nmar_r20 ">
                    <Projectm isFirst={true} name={"Career Karma Projects Spotlight: June 26th"} pic="pic_careerkarma_0" tags={["",""]} />
                    <Projectm isLast={true} name={"HACKATHON Liderazgo Responsable"} tags={["",""]} pic="pic_liderazgo_0"/>
                    {/* <Projectm name={"CAFAM Science Fair 2019"}  pic="pic_cafam_0" tags={["",""]} /> */}
                </div>
            </div>
        </div>
        <div className="Contact_me1 row center corebox_18 mobilecorebox_18 mobilepad_l27 mobilepad_r27">
            <div className="col">
                <span className=" corebox_1  row center f_3 fore_green f700 ffam_0 fore_19">Interested in collaborating?</span>
                <span className="maxedcorebox_x18 fore_13 f600 ffam_0 corebox_8  mobilecorebox_8 row center f_0 lh_2">If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love to help you with it.</span>
                <div className="col center">
                    <div className="row basis_42 allsize"> 
                        <input placeholder="Name" className="corebox_3 mobilemar_b24 pad_l27 pad_t27 back_3 pad_b26" />
                        <input placeholder="Mail" className="corebox_3 mobilemar_b24 pad_l27 pad_t27 back_3 pad_b26" />
                    </div>

                    <textarea placeholder="Message" className="corebox_5 back_3 mobilemar_b24 mar_t24  mobilemar_t0 pad_l27 pad_t27" />
                    <div className="corebox_9 col center">
                        <form id="mail" method="post" action="mailto:dev.armando29@gmail.com?subject=Contact&amp;message=">
                            <input className="special_btn_0 corebox_x10" type="submit" value="Send"  />
                        </form>
                    </div>

                </div>
                <div className="row row_0 corebox_2">
                    <span>Armando Soto</span>
                    <a href="https://www.linkedin.com/in/asotomelo/" className="svg linkedin" />
                    <a href="https://github.com/SotoArmando" className="svg github" />
                    <a href="https://twitter.com/sotoarmando029" className="svg twitter" />
                    <a href="https://stackoverflow.com/users/5007444/sotoarmando" className="svg stack-overflow" />
                </div>

                <span className="bottom_title">© 2020  Sotoarmando</span>
            </div>
        </div>

    </div>

}

