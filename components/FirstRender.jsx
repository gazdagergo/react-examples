import {useEffect} from "react";

const ChildComp = () => {
  useEffect(() => {
    console.log('child mounted')
  }, []);

  return (
    <div>I'm a child {console.log('child render')}</div>
  )
}

const FirstRender = () => {


  useEffect(() => {
    console.log('parent mounted')
  }, []);

  return (
    <div>
      <div>first render {console.log('parent render')}</div>
      <ChildComp />
    </div>
  )
}

export default FirstRender