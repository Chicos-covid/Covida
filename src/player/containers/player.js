import React, { Component } from 'react'

import Video from 'react-native-video'

import {
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progress-bar'
import LeftTime from '../components/leftTime'


class Player extends Component {
    state = {
        loading: true,
        paused: false,
        time: 0,
        videoDuration: 0,
        currentTime: 0
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering,
        })
    }
    onLoad = ({ duration }) => {
        this.setState({
            loading: false,
            videoDuration: duration
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    onProgress = ({ currentTime }) => {
        if (!this.loading) {
            this.setState({
                time: currentTime / this.state.videoDuration,
                currentTime
            })
        }
    }

    render() {
        return (
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        style={styles.video}
                        ref={(ref) => {
                            this.player = ref
                        }}
                        resizeMode="contain"
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.paused}
                        progressUpdateInterval={1000.0}
                        onProgress={this.onProgress}
                    />
                }
                loader={
                    <ActivityIndicator color='red' />
                }
                controls={
                    <ControlLayout>
                        <PlayPause
                            onPress={this.playPause}
                            paused={this.state.paused}
                        />
                        <ProgressBar
                            value={this.state.time}
                        />
                        <LeftTime
                            duration={this.state.videoDuration}
                            currentTime={this.state.currentTime}
                        />
                        <Text>full screen |</Text>
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})

export default Player