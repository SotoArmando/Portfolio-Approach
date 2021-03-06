import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const they = "brilliant codicook budgetboy".split(" ");

const apps = [
    {
        title: "Brilliant Escape",
        desc: "<b>Brilliant Escape</b> is a 2D Arcade game made by Javedots Games where player *you must never let the bouncing square hit you otherwise you lose.",
        platform: "Android",
        src: "./pic/mobile/brilliant.webp",
        class: "mobile3",
        pics: 4,
        livelink: "https://play.google.com/store/apps/details?id=com.armando.Brilliant",
        stacks: "Unity, C#, Google Admob",
        isgame: true,
        link: "https://play.google.com/store/apps/details?id=com.armando.Brilliant"
    },
    {
        title: "Codi Cooking Timer",
        desc: "<b>Codi Cooking Timer</b> Is an cooking assitant, a place to save recipes and have a quick stepthrought cooking feature.",
        platform: "Android",
        src: "./pic/mobile/codicook.webp",
        stacks: "Python, Kivy",
        pics: 7,
        livelink: "https://play.google.com/store/apps/details?id=cc.test.codi",
        class: "mobile1",
        isgame: false,
        link: "https://play.google.com/store/apps/details?id=cc.test.codi"
    },
    {
        title: "Budgetboy Lite",
        desc: "<b>Budgetboy</b> is An Easy way to manage a occational budget for quick, also you will find more functions with will help u get more sophisticated use of it.",
        platform: "Android",
        livelink: "https://play.google.com/store/apps/details?id=com.devindie.budgetmanager",
        sourcelink: "N/A",
        pics: 10,
        src: "./pic/mobile/budgetboy.jpg",
        stacks: "Java, Android Studio, XML",
        class: "mobile2",
        isgame: false,
        link: "https://play.google.com/store/apps/details?id=com.devindie.budgetmanager"
    },

]
export default function Mobile_display() {

    const [values, setValues] = useState({
        space_0: 0,
        space_1: 2,
        space_2: 1,
        space_3: 4,
        show_message_0: true,
        show_message_1: true,
        show_message_2: false,
        show_message_3: false,
    });
    
    const { space_0, space_1, space_2, space_3, show_message_0, show_message_1, show_message_2, show_message_3 } = values;
    const { title, link, stacks, pics } = apps[space_0];
    const b = apps[space_1];

    const handleNextParent = () => {
        const cond = space_2 >= apps[space_0].pics;

        if (cond) {
            setValues({
                ...values,
                space_0: space_0 >= (apps.length - 1) ? 0 : space_0 + 1,
                space_2: space_2 >= 10 ? 1 : space_2 + 1,
                space_1: space_0,
                space_3: apps[space_0].pics,
                show_message_0: !show_message_0,
                show_message_1: !show_message_1,
                show_message_2: false,
                show_message_3: false,
            })
        } else {
            handleNextChild();
        }

    }

    const handleNextChild = () => {
        setValues({
            ...values,
            space_2: space_2 >= 10 ? 1 : space_2 + 1,
            space_3: space_2,
            show_message_0: false,
            show_message_1: false,
            show_message_2: !show_message_2,
            show_message_3: !show_message_3,
        })
    }

    useEffect(() => {
        setTimeout(() => handleNextParent(), 1000 * 6);
    })




    
    return (
        <div className={"col col_2 corebox_18 mobilecorebox_16 Mobile_display " + space_0 + " " + ((show_message_0) ? "next_isparent" : "")}>
            <CSSTransition
                in={show_message_0}
                appear={true}
                timeout={357}
                classNames="mobile_app"
            >
                <div className="viewp ">
                    <div className="header f_1 pad_17 ">
                        <a href={link} className="row row_50 row_1 pad_l23 pad_r33 corebox_6 items_center widthunset">
                            <span className={"corebox_x2 svg " + ((stacks == "Adobe XD") ? "adobexd" : "googleplay")}></span>
                            <div className="col">
                                <span className="span_1 corebox_0 start items_center">{title}</span>
                                <span className="f_0">{((stacks == "Adobe XD") ? "Adobe xd" : "Google Playstore")}</span>
                            </div>
                        </a>
                        <a href={link} className="row row_50 row_1a">
                            <span className={"svg eye"}></span>

                        </a>
                    </div>
                    <div className={"backsize_17 mbacksize_15 mobile_app_jpg " + they[space_0]}></div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={show_message_1}
                appear={true}
                timeout={357}
                classNames="mobile_app_not"

            >
                <div className="viewp">
                    <div className="header f_1 pad_17">
                        <a href={b.link} className="row row_50 row_1 pad_l23 pad_r33 corebox_6 items_center widthunset">
                            <span className={"corebox_x2 svg " + ((b.stacks == "Adobe XD") ? "adobexd" : "googleplay")}></span>
                            <div className="col">
                                <span className="span_1 corebox_0 start items_center">{b.title}</span>
                                <span className="f_0">{((b.stacks == "Adobe XD") ? "Adobe xd" : "Google Playstore")}</span>
                            </div>
                        </a>
                        <a href={link} className="row row_50 row_1a">
                            <span className={"svg eye"}></span>
                        </a>
                    </div>
                    <div className={"backsize_17 mbacksize_15 mobile_app_jpg " + they[space_1]}></div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={show_message_2}
                appear={true}
                timeout={357}
                classNames="mobile_app_detail"
            >
                <div className="viewp">
                    <div className="header f_1 pad_17">
                        <a href={link} className="row row_50 row_1 pad_l23 pad_r33  corebox_6 items_center widthunset">
                            <span className={"corebox_x2 svg " + ((stacks == "Adobe XD") ? "adobexd" : "googleplay")}></span>
                            <div className="col">
                                <span className="span_1 corebox_0 start items_center">{title}</span>
                                <span className="f_0">{((stacks == "Adobe XD") ? "Adobe xd" : "Google Playstore")}</span>
                            </div>
                        </a>
                        <a href={link} className="row row_50 row_1a">
                            <span className={"svg eye"}></span>

                        </a>
                    </div>
                    <div className={"mobile_app_jpg backsize_17 mbacksize_15 mobile pic_" + space_2}></div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={show_message_3}
                appear={true}
                timeout={357}
                classNames="mobile_app_detail_not"

            >
                <div className="viewp">
                    <div className="header f_1 pad_17">
                        <a href={link} className="row row_50 row_1 pad_l23 pad_r33  corebox_6 items_center widthunset">
                            <span className={"corebox_x2 svg " + ((stacks == "Adobe XD") ? "adobexd" : "googleplay")}></span>
                            <div className="col">
                                <span className="span_1 corebox_0 start items_center">{title}</span>
                                <span className="f_0">{((stacks == "Adobe XD") ? "Adobe xd" : "Google Playstore")}</span>
                            </div>
                        </a>
                        <a href={link} className="row row_50 row_1a">
                            <span className={"svg eye"}></span>

                        </a>
                    </div>
                    <div className={"mobile_app_jpg backsize_17 mbacksize_15 mobile pic_" + space_3}></div>
                </div>
            </CSSTransition>

            {/* <div className="progress row row_50">
                <div className= {(3 - (pics - space_2)  == 0) ? 'active' : '' }/>
                <div className= {(3 - (pics - space_2)  == 1) ? 'active' : '' }/>
                <div className= {(3 - (pics - space_2)  == 2) ? 'active' : '' }/>
                <div className= {(3 - (pics - space_2)  == 3) ? 'active' : '' }/>
            </div> */}

        </div>
    )
}