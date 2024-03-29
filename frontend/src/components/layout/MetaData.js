//sb page er upor custom title dite


import React from 'react'
import { Helmet } from 'react-helmet'

export default function MetaData({ title }) {
    return (
        <Helmet>
            <title>{`${title} - Look it & Book it`}</title>
        </Helmet>
    )
}