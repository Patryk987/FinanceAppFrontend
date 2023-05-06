import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const FiltrIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={14}
        fill="none"
        {...props}
    >
        <Path
            fill="#082032"
            d="M9.667 7.833v5.834H6.333V7.833L.458.333h15.084l-5.875 7.5Z"
        />
    </Svg>

)

export const SortIcon = (props) => (

    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#082032"
            d="m15 17.5-3.333-3.333h2.5V5.833h-2.5L15 2.5l3.333 3.333h-2.5v8.334h2.5M1.667 15.833v-1.666H10v1.666m-8.333-5V9.167H7.5v1.666m-5.833-5V4.167H5v1.666H1.667Z"
        />
    </Svg>

)
