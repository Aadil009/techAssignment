import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={9}
      height={13}
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G opacity={0.7} fill="#2B292E">
        <Path d="M4.47 13a.776.776 0 01-.684-.402l-3.224-5.9A4.526 4.526 0 01.62 2.226 4.412 4.412 0 014.57.001a4.412 4.412 0 013.748 2.225 4.526 4.526 0 01.06 4.472l-3.224 5.9-.005.008a.776.776 0 01-.68.394zm0-12.187h-.084a3.605 3.605 0 00-3.062 1.82 3.72 3.72 0 00-.05 3.675l3.196 5.848 3.194-5.847a3.72 3.72 0 00-.049-3.675A3.605 3.605 0 004.47.813z" />
        <Path d="M4.47 5.89A1.83 1.83 0 012.64 4.064 1.83 1.83 0 014.47 2.234a1.83 1.83 0 011.828 1.829A1.83 1.83 0 014.47 5.89zm0-2.843a1.017 1.017 0 000 2.031 1.017 1.017 0 000-2.031z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
