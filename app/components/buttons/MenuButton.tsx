import type { Property } from 'csstype'

type Props = {
  expanded: boolean,
  onClick: () => void,
}

export function MenuButton({ expanded, onClick }: Props) {
  const baseLineStyle = {
    minHeight: '2px',
    borderRadius: '10px',
    transformStyle: 'preserve-3d' as Property.TransformStyle,
    transition: 'transform 300ms ease 0s, background-color 350ms ease 0s, -webkit-transform 300ms ease 0s'
  }
  const upperLineStyle = {
    ...baseLineStyle,
    transform: `translate3d(0px, ${expanded ? '8' : '0'}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${expanded ? '45' : '0'}deg) skew(0deg, 0deg)`
  }
  const middleLineStyle = { ...baseLineStyle, opacity: expanded ? '0' : '1'}
  const lowerLineStyle = {
    ...baseLineStyle,
    transform: `translate3d(0px, ${expanded ? '-8' : '0'}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${expanded ? '-45' : '0'}deg) skew(0deg, 0deg)`
  }
  return (
    <div onClick={onClick} className="sm:hidden relative block p-0 w-12 text-3xl text-white rounded-full bg-slate-900 hover:bg-slate-900"
      style={{userSelect: 'text', minHeight: '48px', minWidth: '48px', transition: 'transform 300ms ease 0s, background-color 350ms ease 0s, -webkit-transform 300ms ease 0s'}} aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded={expanded}>
      <div className="flex flex-col absolute justify-center items-center p-0 w-full h-full">
        <div className="flex flex-col justify-between items-center p-0 m-auto w-6" style={{minHeight: '18px'}}>
          <div className="p-0 w-6 bg-white" style={upperLineStyle} />
          <div className="p-0 w-6 bg-white" style={middleLineStyle} />
          <div className="p-0 w-6 bg-white" style={lowerLineStyle} />
        </div>
      </div>
    </div>
  )
}
