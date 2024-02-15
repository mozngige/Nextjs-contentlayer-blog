/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")
const nextConfig = {
    reactStrictMode: false,
    compiler:{
        removeCnsole: true
    }
}

module.exports =  withContentlayer({...nextConfig})



