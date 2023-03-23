import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const ShowEye = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G
            clipPath="url(#a)"
            stroke="#082032"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M.833 10.734S4.167 4.067 10 4.067s9.167 6.667 9.167 6.667" />
            <Path d="M.833 10.733S4.167 17.4 10 17.4s9.167-6.667 9.167-6.667" />
            <Path d="M10 13.233a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" transform="translate(0 .733)" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const HiddenEye = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G
            clipPath="url(#a)"
            stroke="#082032"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="m1.667 1.667 16.666 16.666M9.167 4.215c.27-.032.549-.048.833-.048 5.303 0 8.333 5.833 8.333 5.833s-.576 1.11-1.666 2.361M5.594 5.602C3.054 7.33 1.667 10 1.667 10s3.03 5.833 8.333 5.833c1.709 0 3.181-.605 4.393-1.426L5.594 5.602Z" />
            <Path d="M11.667 11.864A2.5 2.5 0 0 1 8.225 8.24" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const Check = (props) => (
    <Svg
        width={11}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m1 5 3 4 6-8"
            stroke="#fff"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
