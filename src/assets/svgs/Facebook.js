import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={56}
      height={73}
      viewBox="0 0 56 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.093 72v-3.952h4.511v-.962H1.093v-2.795h4.602v-.962H.014V72h1.079zm10.93 0v-4.316c0-1.521-1.104-2.119-2.43-2.119-1.028 0-1.834.338-2.51 1.04l.455.676c.56-.598 1.17-.871 1.924-.871.91 0 1.587.481 1.587 1.326v1.131c-.508-.585-1.223-.858-2.08-.858-1.067 0-2.198.663-2.198 2.067 0 1.365 1.131 2.08 2.197 2.08.845 0 1.56-.299 2.08-.871V72h.976zm-2.704-.546c-.91 0-1.547-.572-1.547-1.365 0-.806.637-1.378 1.547-1.378.69 0 1.352.26 1.73.78v1.183c-.377.52-1.04.78-1.73.78zm7.428.702c1.144 0 1.82-.468 2.3-1.092l-.65-.598c-.415.559-.948.819-1.598.819-1.34 0-2.171-1.04-2.171-2.431s.832-2.418 2.17-2.418c.65 0 1.184.247 1.6.819l.65-.598c-.481-.624-1.157-1.092-2.301-1.092-1.872 0-3.133 1.43-3.133 3.289 0 1.872 1.26 3.302 3.133 3.302zm6.502 0c1.027 0 1.872-.338 2.495-.962l-.468-.637c-.494.507-1.221.793-1.936.793-1.352 0-2.184-.988-2.262-2.171h5.082v-.247c0-1.885-1.117-3.367-3.015-3.367-1.794 0-3.095 1.469-3.095 3.289 0 1.963 1.34 3.302 3.198 3.302zm1.95-3.692h-4.122c.052-.962.715-2.093 2.054-2.093 1.43 0 2.055 1.157 2.067 2.093zm3.516 1.833V67.45c.338-.546 1.105-1.014 1.872-1.014 1.274 0 2.028 1.04 2.028 2.431s-.754 2.418-2.028 2.418c-.767 0-1.534-.442-1.872-.988zm0 1.703v-.936a2.643 2.643 0 002.119 1.092c1.638 0 2.795-1.248 2.795-3.289 0-2.002-1.157-3.302-2.795-3.302-.858 0-1.612.416-2.12 1.105v-3.341h-.974V72h.975zm9.245.156c1.911 0 3.107-1.482 3.107-3.302s-1.196-3.289-3.107-3.289c-1.91 0-3.107 1.469-3.107 3.289s1.196 3.302 3.107 3.302zm0-.871c-1.339 0-2.093-1.144-2.093-2.431 0-1.274.754-2.418 2.093-2.418 1.34 0 2.08 1.144 2.08 2.418 0 1.287-.74 2.431-2.08 2.431zm7.44.871c1.91 0 3.107-1.482 3.107-3.302s-1.196-3.289-3.107-3.289c-1.911 0-3.107 1.469-3.107 3.289s1.196 3.302 3.107 3.302zm0-.871c-1.34 0-2.093-1.144-2.093-2.431 0-1.274.754-2.418 2.093-2.418s2.08 1.144 2.08 2.418c0 1.287-.741 2.431-2.08 2.431zM55.62 72l-2.795-3.432 2.782-2.847h-1.235l-3.302 3.341v-5.733h-.975V72h.975v-1.794l1.04-1.027L54.373 72h1.248z"
        fill="#2B292E"
      />
      <Circle cx={26} cy={24} r={24} fill="#F6FCFC" />
      <Path
        d="M32 14h-3a5 5 0 00-5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3v-4z"
        fill="#3AAFA9"
      />
    </Svg>
  );
}

export default SvgComponent;