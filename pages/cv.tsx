import React, { useEffect, useState } from 'react'
import { createUnparsedSourceFile } from 'typescript'
import LayoutCV from '@layouts/cv/layout'

const cv = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    window
      .fetch('api/projects')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProjects(data)
      })
      .catch((err) => {
        createUnparsedSourceFile.log(err)
      })
  })

  return (
    <>
      <LayoutCV></LayoutCV>
    </>
  )
}

export default cv
