export function NextButton({ onClick, style, className }: { onClick?: () => void, style?: { [key: string]: string }, className?: string}) {
  return (
    <div
      onClick={onClick}
      className={`absolute z-10 mr-0 h-12 w-12 md:w-20 md:h-20 max-w-20 cursor-pointer select-none overflow-hidden bg-gray-100 text-2xl leading-4 text-dh-dark hover:bg-slate-900 hover:text-white left-0 right-0 top-0 bottom-0 ${className}`}
      role="button"
      tabIndex={0}
      aria-controls="w-slider-mask-1"
      aria-label="next slide"
      style={{
        transition:
          "transform 300ms ease 0s, background-color 300ms ease 0s, color 300ms ease 0s, -webkit-transform 300ms ease 0s",
        borderRadius: "50%",
        ...(style ?? {})
      }}
    >
      <div
        className="text-[20px] md:text-2xl w-5 md:w-7 h-5 md:h-7 w-icon-slider-right absolute m-auto box-border font-webflow-icons normal-case not-italic leading-none"
        style={{ inset: "0px" }}
      />
    </div>
  )
}
