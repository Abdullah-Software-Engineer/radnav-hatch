declare module 'react-fast-marquee' {
  import { ReactNode } from 'react'

  export interface MarqueeProps {
    children?: ReactNode
    className?: string
    speed?: number
    gradient?: boolean
    gradientColor?: [number, number, number]
    gradientWidth?: number | string
    pauseOnHover?: boolean
    pauseOnClick?: boolean
    direction?: 'left' | 'right' | 'up' | 'down'
    loop?: number
    delay?: number
    play?: boolean
    autoFill?: boolean
  }

  const Marquee: React.FC<MarqueeProps>
  export default Marquee
}
