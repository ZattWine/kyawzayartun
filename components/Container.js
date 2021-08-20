export default function Container({ children }) {
  // lg:max-w-4xl md:max-w-3xl sm:max-w-2xl
  return <div className='w-11/12 md:w-9/12 mx-auto'>{children}</div>
}
