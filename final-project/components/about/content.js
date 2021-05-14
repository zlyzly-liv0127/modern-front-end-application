import styles from '../../styles/about/content.module.css'

function Content() {
    return (
            <div id={styles.content}>
                <div id={styles.QRcode}>
                    <img src="https://sf3-dycdn-tos.pstatp.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/download.png"></img>
                    扫码下载今日头条
                </div>
                <div id={styles.home}>
                    <a href='/' target='_self'>
                    <img src="https://sf3-dycdn-tos.pstatp.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/homeicon.jpg"></img>
                    </a>
                </div>
                <div id={styles.content1}>
                    <p>今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，促使信息创造价值。</p>
                    <p>今日头条目前拥有推荐引擎、搜索引擎、关注订阅和内容运营等多种分发方式，囊括图文、视频、问答、微头条、专栏、小说、直播、音频和小程序等多种内容体裁，并涵盖科技、体育、健康、美食、教育、三农、国风等超过100个内容领域。</p>
                    <p>头条搜索是今日头条推出的搜索引擎服务，支持海量优质内容和全网公开内容的检索，为用户提供精准、专业、快捷的搜索结果。用户可以在今日头条客户端内体验，除了默认的综合搜索频道外，还有视频、资讯、小视频、图片、音乐、影视等多个垂直搜索，全方位满足搜索需求。</p>
                    <p>头条号是今日头条旗下开放的内容创作与分发平台， 实现政府部门、媒体、企业、个人等内容创作者与用户之间的智能连接 。截至2019年12月，头条号帐号总数已超过 180 万，平均每天发布 60 万条内容。</p> 
                    <p>微头条是今日头条旗下的社交产品，用户可通过发布图文、短视频、直播等多形式的动态与人互动，逐渐与人建立起社交关系。在微头条，用户每天产生的互动数量超过2000万，发布量近1000万，活跃的大咖超过1万位。</p>
                </div>

                <div id={styles.footer}>
                    <p>
                        <span> © 2021 今日头条 &nbsp;</span>
                        <a href='//www.12377.cn/' target='_blank'>中国互联网举报中心</a>
                        <a href='//tsm.miit.gov.cn/dxxzsp/' target='_blank'>&nbsp;京ICP证140141号</a>
                        <a href='//beian.miit.gov.cn' target='_blank'>&nbsp;京ICP备12025439号-3&nbsp;</a>
                        <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002023' target='_blank'>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABvFBMVEVHcEz25qTk0JXnxWXs04vktmTlzXP89t337Lr+/OD69M3eqFf53I316pzu46vu3H/Yrn3owH7UrFrftWjx166xkHz7x2fcrGrgvovz6ZLcp1nkvFnTk3DZr4LKhFvDfz7jrFPnvGzbnFHoxnz/+dDqw3r/74bktoCaaVyfaFXRrnbqvlkABHjVHhjWPCEFAWQBAW3qxmDmv1HvzGPw1nHkslTuy2zdm0T/1FXWAgjNAALcSSbWZDTquVDuyVnmuFjfo0rrsEnluF3VkkPdkkbUh0D8xVS5kVp2eX//3WDklTjUxXVreYnrXyPtgjvqcDLEun+Ujn3143PpwWDjrVPTLhw5FDjVdC/yoEHjrUqTeFpRNlHdhTXDEgpZVnPJJxNkEUPREg7MPSfYVi7URCj9LA/acTi7ABA8H0h7ipcAEpBzY2EZN5D2qjy7TCYAAID9vUbuvlDWjjzzfCjYnlj8jizXkVOsonP/723twmKTYDa0o2aptJHJWSr/vmBODk6NhnfFUiReWWbGPh1MADmxDg770m//0maBWDqEaUrEazOeXzCjfVKnjVm1gD/TvIfFrnz8zGSjmYTOeDoOTxX1AAAAK3RSTlMAKgLukeT5HEEIW8a2PIDnrMb6/GnOwuCcq+v0FEhdnOS80vtM5r6x+/dvgk6cRwAAAWVJREFUGNNjYIAAdhFRURF2BmTAIaDZ3dHZoyGgghDjdA+r6vL1Fy4Pc+eEibGLRUcVW+pZW0XURPNARRmFM5pKdXVDrRNj63wyVBnBgryB+b2+lqG6iXpWvgEGDYwQzYE6fdaWunp6ulZ63gYeaiA3aOVOynf3s6p1NnJJ9Pc2CLTgAwpKeE3Iyi7Ia7ZJS3P1zNYJyJUACorHmOUY5PmlJNmk+Nvo55h4iQMFhSYXZOqkp9o0hvulphv4uLmyAgXVzSf2Z7W0xsbHWycl6AS0mbIABQVdQtozdfT16xP09XU8PJ0iBYGCyiVlXmbeUT7VQnFxHpUR5pH8QEEuIwfncDdPCzdHiwqLGGdTOw6Q67mYjVyLjLVNtY1NzF3MmDkg4cZqaGivbRhsrO1gbxIsxQsW5AkycTLVDgm2NXewdzILkoSEJou0rV2ho62jtp2RIT8fEzRAZeTkuZUUWLkVWWTBQgDxBU8MyWNkzgAAAABJRU5ErkJggg=='/>
                            &nbsp;京公网安备 11000002002023号
                        </a>
                    </p>
                    <p>
                        <a href='/license/' id='icp' target='_blank'>&nbsp;网络文化经营许可证</a>
                        <a href='/a3642705768/' target='_blank'>&nbsp;跟帖评论自律管理承诺书&nbsp;</a>
                        <span>违法和不良信息举报电话：400-140-2108</span>
                        <span>&nbsp;公司名称：北京字节跳动科技有限公司</span>
                    </p>

        

            </div>
        </div>

    )
}

export default Content