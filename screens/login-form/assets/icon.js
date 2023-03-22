import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Info = (props) => (
    <Svg
        width={25}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12.75 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM12.75 18.274v-.024"
            stroke="#303237"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12.75 14.5c2-1 4-2.29 4-4.5a4 4 0 0 0-8 0"
            stroke="#303237"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

