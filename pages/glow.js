import Round from '../round.svg'

export default function Glow() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black">
      <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto px-2 sm:px-0">
        <div className="py-16 flex justify-end -mb-24">
          <div className="relative flex h-80 w-80">
            <div className="absolute w-full h-full bg-conic-gradient filter blur-xl rounded-full"></div>
            <div className="absolute w-full h-full bg-conic-gradient filter blur-3xl opacity-60 animate-pulse rounded-full"></div>
            <div className="absolute -inset-0.5 rounded-sm bg-conic-gradient rounded-full"></div>
            <Round viewbox={"0 0 235 235"} className="self-start h-32 w-32 sm:h-80 sm:w-80  absolute" />
          </div>
        </div>
        <div className="py-4 sm:py-12 border-b-2">
          <h3 className="sm:text-2xl font-semibold text-gray-100 sm:mb-2">
            From the Office of
          </h3>
          <h1 className="text-3xl sm:text-8xl font-bold text-gray-100">
            The Standard <br /> Audio Company
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row text-gray-200 mt-4 sm:mt-8 leading-5 pb-6 sm:pb-12">
          <p className="text-lg sm:text-2xl flex-p7 px-2 mb-4 sm:mb-0">
            Hello, and welcome to the Standard Audio Company. We are a
            collective of designers, developers, and web3 enthusiasts focused on
            bringing a bit more interactivity and fun into the metaverse.
          </p>
          <div className="text-sm sm:text-base flex-1 flex flex-col sm:flex-row">
            <p className="flex-1 px-2 mb-4 sm:mb-0">
              Our first drop - <span className="font-bold">MXTAPE</span> - is a
              revival of the great cassette medium, although this time as an
              NFT. Create a mixtape. Send one to your friend. Send one to your
              secret crush. Keep it for yourself if you want! Create a mixtape.
              Send one to your friend. Send one to your secret crush. Keep it
              for yourself if you want!
            </p>
            <p className="flex-1 px-2">
              You can read a bit more about our plans for the future here. Join
              our discord. Create a mixtape. Send one to your friend. Send one
              to your secret crush. Keep it for yourself if you want! Create a
              mixtape. Send one to your friend. Send one to your secret crush.
              Keep it for yourself if you want!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-4 sm:pb-20 flex-col">
          <button className="rounded-full px-4 py-4 text-white border-2 hover:bg-gray-400 hover:text-gray-900 hover:border-gray-400 text-base sm:text-2xl">
            Join our Discord
          </button>
        </div>
      </div>
    </div>
  )
}
