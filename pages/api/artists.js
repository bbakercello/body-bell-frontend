export default function handler(req,res){
    res.status(200).json([
    {
      spotifyID: "0CdShur7VAAWDXyWYYFBHj",
      name: "Popsicle Hunters",
      bio: "Chronicling of the bond-strengthening power of popsicles.",
      instagram: "https://www.instagram.com/popsicle_hunters/",
    },
    {
      spotifyID: "4v9RSKTiLC9leufHOZC2BV",
      name: "Cake Dive",
      bio: "Nick Stevens solo project.",
      instagram: "https://www.instagram.com/bodybellrecords/",
    },
    {
      spotifyID: "75HkJT1YV8rHpnNV5zMmOj",
      name: "Ben Baker",
      bio: "New England experimental artist.",
      instagram: "https://www.instagram.com/ben_bakermusic/",
    }
  ])
}


