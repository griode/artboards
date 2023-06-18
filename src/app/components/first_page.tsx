import Avatar from "./avatar"

/* eslint-disable @next/next/no-img-element */
const FirstPage = () => {
  return (
    <div className="mx-24 my-10">
      <h1 className=" w-3/4 m-auto text-8xl font-extrabold">
        Explore Creative Artboartds Generated by AI
      </h1>
      <div>
        <div className="mt-12 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="border rounded-xl">
            <button className="mx-4 my-2 text-sm px-4 py-2 text-white bg-black rounded-full">
              Schedule a meet
            </button>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <p>Find, explore and generate in an awesome place one</p>
            {avatars()}
          </div>
          <div className="h-60 overflow-hidden rounded-2xl">
            <img
              className="object-cover rounded-2xl"
              src="https://img.freepik.com/photos-premium/fond-ecran-fusion-abstraite_378362-1387.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.2.1821266011.1685032239&semt=sph"
              alt="av2"
            />
          </div>
          <div>
            <div className="flex items-center">
              <Avatar
                className="w-12 h-12"
                url="https://img.freepik.com/icones-gratuites/pomme_318-432131.jpg?size=626&ext=jpg&uid=R32696892&ga=GA1.1.1821266011.1685032239&semt=ais"
              />
              <Avatar
                className="-ml-4 w-12 h-12"
                url="https://cdn-icons-png.flaticon.com/512/91/91973.png?w=740&t=st=1687045535~exp=1687046135~hmac=1ac14be0873a561673eafd1e5f459ed0206bb819f129902a9f38ac40fe4e4552 "
              />
              <p className="ml-3">Services available</p>
            </div>
            <h2 className="text-xl font-semibold">+120K</h2>
            <p>Our active monthly users</p>
            <h2 className="text-xl font-semibold mt-8">+120K</h2>
            <p>Our monthly anboards</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const avatars = () => {
  return (
    <div className="flex mt-5">
      <Avatar
        className="w-12 h-12"
        url="https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436180.jpg"
      />
      <Avatar
        className="-ml-4 w-12 h-12"
        url="https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=740&t=st=1687038409~exp=1687039009~hmac=c8581fefd293b4970a7e892b9cdc86f87f04dbb8808036f36f864b3573b8e6f5"
      />
      <Avatar
        className="-ml-4 w-12 h-12"
        url="https://img.freepik.com/psd-gratuit/3d-illustration-personne_23-2149436192.jpg?w=740&t=st=1687038376~exp=1687038976~hmac=9c77587f16da3d6be77b7a46020d8959b044f730e0190ca1fa538d83c2ed2993"
      />
    </div>
  )
}
export default FirstPage