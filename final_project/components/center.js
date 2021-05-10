import styles from '../styles/center.module.css'
import React, { useEffect, useState } from "react";


var no_dislike_count = 2;

function video_tip(item) {
    return (item.video_duration_str === undefined) ? '' : (
        <i className={styles.video_tip}>
            <span>{ item.video_duration_str }</span>
        </i>
    )
}

function dislike() {
    return (no_dislike_count-- > 0) ? '' : (
        <div className={styles.dislike}>
            <i className={styles.dislike_icon}></i>
            不感兴趣
        </div>
        )
}

function tag(t) {
    return ((t.chinese_tag !== undefined) ? t.chinese_tag : t.tag);
}

function aggregate(number) {
    if (number === undefined)
        return 0;
    if (number >= 1e4)
        return Math.floor(number / 1e4) + '万';
    return number;
}

function count_tag(num, tag) {
    return aggregate(num) + tag;
}

function no_mode(item, index) {
    return (
    <li key={index}>
        <div className={styles.content_card}>
            <div className={styles.content_text_card}>
                <div className={styles.title}>
                    <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'>{ item.title }</a>
                </div>
                <div className={styles.content_foot}>
                    <a className={styles.tag}>{tag(item)}</a>
                    <a className={styles.avatar} href={'https://toutiao.com' + item.media_url} target='_blank' rel='noopener noreferrer'>
                        <img src={'https:' + item.media_avatar_url}/>
                    </a>
                    <a>&nbsp;{item.source}&nbsp;·</a>
                    <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>
                        &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·</a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    </li>
    )
}


function single_mode(item, index) {
    return (
    <li key={index}>
        <div className={styles.content_card}>
            <div className={styles.content_image}>
                <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'>
                    <img src={'https://' + item.image_url}/>
                    { video_tip(item) }
                </a>
            </div>
            <div className={styles.content_text_card_with_image}>
                <div className={styles.title}>
                    <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'> 
                        {item.title}
                    </a>
                </div>
                <div className={styles.content_foot}>
                    <a className={styles.tag}>{tag(item)}</a>
                    <a className={styles.avatar} href={'https://toutiao.com' + item.media_url} target='_blank' rel='noopener noreferrer'>
                        <img src={'https:' + item.media_avatar_url}/>
                    </a>
                    <a>&nbsp;{item.source}&nbsp;·</a>
                    <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>
                        &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·</a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    </li>
    )
}
function _() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (!e)
        return "";
    var t = 1e3 * 60;
    var a = (new Date()).getTime() - 1e3 * e;
    var r = Math.floor(a / t);
    if (r < 1)
        return "\u521a\u521a";
    if (r < 60)
        return "".concat(r, "\u5206\u949f\u524d");
    else if (r < 60 * 24)
        return "".concat(Math.floor(r / 60), "\u5c0f\u65f6\u524d");
    else if (r < 60 * 24 * 30)
        return "".concat(Math.floor(r / 1440), "\u5929\u524d");
    else if (r < 60 * 24 * 30 * 12)
        return "".concat(Math.floor(r / 43200), "\u6708\u524d");
    var d = new Date(e);
    return d.getFullYear() + '\u5e74' + (d.getMonth() + 1) + '\u6708' + d.getDate() + '\u65e5';
}



function FeedBack(item, index) {
    if (item.article_genre === 'ugc')
        return
    if (item.ugc_data !== undefined)
        return ugc_mode(item, index)
    else if (item.single_mode)
        return single_mode(item, index)
    else if (item.has_gallery)
        return gallery_mode(item, index)
    else
        return no_mode(item, index)
}

function Center(){
    const [state, setState] = useState({
        data: {},
      });
    
    useEffect(() => {
        
        fetch("/api/hello").then(async (res) => {
          const data = await res.json();
          setState({
            data,
        });
    });
        
    }, []);
    let data = Array.from(state.data)
    return (
        <div className={styles.center}>
            <div className={styles.content}>
                <ul id={styles.content_list}>{data.map((item, index) => FeedBack(item, index))}</ul>
            </div>
        </div>
    )
}
export default Center