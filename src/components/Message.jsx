import React from "react";
import { memo } from "react"

export const Message = memo((props) => {
  return <p style={{ color: props.color }}>こんにちは！</p>
});