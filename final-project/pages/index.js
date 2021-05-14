import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import LeftBar from '../components/leftbar'
import RightBar from '../components/rightbar'
import React, { useEffect, useState } from "react";



function video_tip(item) {
  return (item.video_duration_str === undefined) ? '' : (
      <i id={styles.video_tip}>
          <span>{ item.video_duration_str }</span>
      </i>
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
      <div id={styles.content_card}>
          <div id={styles.content_text_card}>
              <div id={styles.title}>
                  <a href={'https://toutiao.com' + item.source_url} target='_blank'>{ item.title }</a>
              </div>
              <div id={styles.content_foot}>
                  <a id={styles.tag}>{tag(item)}</a>
                  <a id={styles.avatar} href={'https://toutiao.com' + item.media_url} target='_blank'>
                      <img src={'https:' + item.media_avatar_url}/>
                  </a>
                  <a>&nbsp;{item.source}&nbsp;·</a>
                  <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank'>
                      &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·</a>
                  <span>&nbsp;{ Time(item.behot_time) }</span>
              </div>
          </div>
      </div>
  </li>
  )
}

function single_mode(item, index) {
  return (
  <li key={index}>
      <div id={styles.content_card}>
          <div id={styles.content_image}>
              <a href={'https://toutiao.com' + item.source_url} target='_blank'>
                  <img src={'https://' + item.image_url}/>
                  { video_tip(item) }
              </a>
          </div>
          <div id={styles.content_text_card_with_image}>
              <div id={styles.title}>
                  <a href={'https://toutiao.com' + item.source_url} target='_blank'> 
                      {item.title}
                  </a>
              </div>
              <div id={styles.content_foot}>
                  <a id={styles.tag}>{tag(item)}</a>
                  <a id={styles.avatar} href={'https://toutiao.com' + item.media_url} target='_blank'>
                      <img src={'https:' + item.media_avatar_url}/>
                  </a>
                  <a>&nbsp;{item.source}&nbsp;·</a>
                  <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank'>
                      &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·</a>
                  <span>&nbsp;{ Time(item.behot_time) }</span>
              </div>
          </div>
      </div>
  </li>
  )
}
function Time() {
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
    if (item.single_mode)
        return single_mode(item, index)
    else
        return no_mode(item, index)
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/hello`)
  const data = await res.json()
  return { props: { data } }
}


export default function Home({data}) {
  let data1 = Array.from(data)
  return (
    <div>
    <Head>
      <title>今日头条</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
       <div>
        <Header></Header>
         <div id={styles.main}>
           <LeftBar></LeftBar>
           <div id={styles.center}>
            <div id={styles.content}>
                <ul >{data1.map((item, index) => FeedBack(item, index))}</ul>
            </div>
           </div>
           <RightBar></RightBar>
         </div>
      </div>
    </main>
  </div>
  )
}
