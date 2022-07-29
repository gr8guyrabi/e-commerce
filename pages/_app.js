import React from 'react'
import { Toaster } from 'react-hot-toast'

import { Layout} from '../components'
import { StateContext } from '../context/StateContext'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <Toaster />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    )
}

export default MyApp
