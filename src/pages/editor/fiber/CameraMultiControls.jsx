import React from 'react';

function CameraMultiControls() {
  const orbit = useRef()
  const transform = props.controlRef

  const callbackWrapper = (event) => {
    props.callback(props.modelRef.current.matrixWorld);
  }

  useEffect(() => {
    if (transform.current) {
      const controls = transform.current
      controls.setMode(props.mode)
      const callback = event => (orbit.current.enabled = !event.value)
      controls.addEventListener("dragging-changed", callback)
      controls.addEventListener("mouseUp", callbackWrapper);
      return () => {
        controls.removeEventListener("dragging-changed", callback);
        controls.removeEventListener("mouseUp", callbackWrapper);
      }
    }
  })

  return (
    <>
      <TransformControls ref={transform}>
        {props.children}
      </TransformControls>
      <OrbitControls ref={orbit} />
    </>
  );
}

export default CameraMultiControls;
