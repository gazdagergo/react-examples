import { useEffect, useRef } from "react";

const ChildComp = () => {
  const divRef = useRef(null)

  useEffect(() => {
    console.log('child mounted')
  }, []);

  return (
    <div ref={el => {
      console.log('child div ref set')
      divRef.current = el
      }}>
      I'm a child {console.log('child render')}
    </div>
  )
}

const FirstRender = () => {
  const divRef = useRef(null)

  useEffect(() => {
    console.log('parent mounted')
  }, []);

  return (
    <div ref={el => {
      console.log('parent div ref set')
      divRef.current = el
    }}>
      <div>first render {console.log('parent render')}</div>
      <ChildComp />
    </div>
  )
}

export default FirstRender