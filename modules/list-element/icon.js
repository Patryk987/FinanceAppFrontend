import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const RightArrow = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            fill="#082032"
            d="m9.792 18.75-1.459-1.458 4.792-4.792-4.792-4.792L9.792 6.25l6.25 6.25-6.25 6.25Z"
        />
    </Svg>
)