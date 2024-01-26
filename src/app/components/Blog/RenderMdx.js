"use client"
import React from 'react'
import {useMDXComponent} from  'next-contentlayer/hooks'
import Image from "next/image"
const useMDXComponents = {
  Image
}
const RenderMdx = ({blog}) => {



  const MDXContent = useMDXComponent(post.body.code)
  return (
    <div>
      <MDXContent/>
    </div>
  )
}

export default RenderMdx