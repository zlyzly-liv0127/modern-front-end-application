import styles from '../../styles/about/header.module.css'

function Header() {
    return (
    <div id={styles.header}>
        <div id={styles.right_bar}>
            <div id={styles.login}>
                <a href="https://sso.toutiao.com/login/" target="_self">
                    登录
                </a>
            </div>
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