import styles from '../styles/header.module.css'


function Header(){
    return (<div id={styles.header}>
        <div id={styles.left_bar}>
            <div id={styles.header_download}>
                <a href="https://app.toutiao.com" target="_blank">
                    下载APP
                </a>
            </div>
            <div id={styles.header_signup}>
                <a href="https://mp.toutiao.com" target="_blank">
                    注册头条号
                </a>
            </div>
            <div id={styles.header_weather}>
                <span>&nbsp;北京</span>
                <span>多云</span>
                <span>11℃ &nbsp; / &nbsp;25℃</span>
            </div>
        </div>
        <div id={styles.right_bar}>
            <div id={styles.complaint}>
                <a href="https://mp.toutiao.com/profile_v4_public/public/protocol/complains/" target="_blank">
                    侵权投诉
                </a>
            </div>
            <div id={styles.product}>
                <a href="https://www.toutiao.com/about/">
                    头条产品
                </a>
            </div>
        </div>
    </div>
    )
}

export default Header