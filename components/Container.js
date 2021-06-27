export default function Container({ children }) {
  // lg:max-w-4xl md:max-w-3xl sm:max-w-2xl
  return <div className='container mx-auto px-12 py-3'>{children}</div>
}
