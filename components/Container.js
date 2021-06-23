export default function Container({ children }) {
  return (
    <div className='lg:max-w-4xl md:max-w-3xl sm:max-w-2xl mx-auto px-14 py-3'>
      {children}
    </div>
  )
}
