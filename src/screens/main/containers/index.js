import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from '@ui-kitten/components';

class Index extends Component{
    render() {
        return(
            <Text>Index</Text>
        )
    }
}

export default connect(null)(Index);