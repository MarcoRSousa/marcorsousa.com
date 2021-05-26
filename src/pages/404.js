import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"

import Head from "../components/head"

export default function NotFound() {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Page Not Found</h1>
            <h2>You've been 404'd!</h2>
            <p><Link to= "/">Home Page</Link></p>
        </Layout>
    )
}