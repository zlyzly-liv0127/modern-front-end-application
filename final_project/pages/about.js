import Header from '../components/about/header'
import Channel from '../components/about/channel'
import Content from '../components/about/content'
function About() {
    return (
        <div>
            <div>
                <Header></Header>
                <Channel></Channel>
            </div>
            <div>
                <Content></Content>
            </div>
        </div>
    )
}

export default About