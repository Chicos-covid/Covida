// ? This footer is for the credits of some open source thinks

import React from 'react';

import {
    Layout,
    Text
} from '@ui-kitten/components';

function Footer(props) {
    return (
        <Layout>
            <Text>{props.text}</Text>
        </Layout>
    )
}

export default Footer;