import { Tilt } from 'react-tilt'

interface Props {
  children: React.ReactNode
  className?: string
}

const defaultTiltOptions = {
  reverse:        false,
  max:            12,
  perspective:    1000,
  scale:          1.03,
  speed:          400,
  transition:     true,
  axis:           null,
  reset:          true,
  easing:         'cubic-bezier(.03,.98,.52,.99)',
}

export default function TiltCard({ children, className = '' }: Props) {
  return (
    <Tilt options={defaultTiltOptions} className={className}>
      {children}
    </Tilt>
  )
}
