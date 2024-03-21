import React from 'react'
import style from "./getButton.module.css"

const getButton = () => {
  return (
    <button className={style["get-btn"]}>Get a free quote</button>
  )
}

export default getButton