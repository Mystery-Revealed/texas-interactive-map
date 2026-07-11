// Mode A: Geographic Regions of Texas
// Source of truth for this content: docs/CONTENT.md
const GEOGRAPHY_DATA = {
  id: 'geography',
  label: 'Geographic Regions of Texas',
  regions: [
    {
      id: 'coastal-plains',
      shapeId: 'shape-coastal-plains',
      name: 'Coastal Plains',
      color: '#4a9d5f',
      cities: ['Houston', 'Dallas', 'San Antonio', 'Austin', 'Corpus Christi', 'Galveston', 'Brownsville', 'Laredo', 'Tyler', 'Beaumont'],
      paragraphs: [
        'The Coastal Plains region stretches along the Gulf of Mexico in the east and south part of Texas. It reaches inland to the Balcones Escarpment (a steep cliff where the land suddenly rises up) and north to the Red River. This region has four smaller parts, called subregions. The Gulf Coastal Plain sits right along the coast, with wetlands (low, soggy land) and barrier islands (long strips of sand that protect the coast from waves), near Corpus Christi, Galveston, Brownsville, and Laredo. The Piney Woods, in East Texas, is covered in thick pine and hardwood forest, near Tyler and Beaumont. The Post Oak Belt is a strip of scattered trees between the forest and the prairie. The Blackland Prairie has rich, dark soil that is great for farming and stretches from the Red River down to San Antonio, passing by Dallas, Waco, and the eastern edge of Austin. Houston is the region’s biggest city.',
        'The Coastal Plains has a subtropical (warm and rainy) and humid climate. Summers are hot and sticky, often over 90°F, while winters are mild and rarely freeze near the coast. Spring brings heavy rain and thunderstorms, and fall brings the risk of hurricanes. Pine, oak, hickory, and cypress trees grow well here, along with coastal grasses, cattails, and wildflowers. Animals include white-tailed deer, raccoons, armadillos, alligators, and birds like great blue herons and pelicans.',
        'This region is rich in resources: oil, natural gas, timber (wood), fertile soil, seafood, and deep-water ports (harbors deep enough for big ships). Because of this, many people here work in oil and gas, shipping, commercial fishing, farming (cotton, rice, and citrus fruit), and even aerospace — Houston is home to NASA’s Johnson Space Center.'
      ]
    },
    {
      id: 'north-central-plains',
      shapeId: 'shape-north-central-plains',
      name: 'North Central Plains',
      color: '#e8c547',
      cities: ['Fort Worth', 'Abilene', 'Wichita Falls', 'Waco'],
      paragraphs: [
        'The North Central Plains region sits between the Coastal Plains to the east and the Great Plains to the west. The Balcones Escarpment forms its east border, the Caprock Escarpment (another steep cliff) forms its west border, and the Red River forms the border with Oklahoma. This region has three subregions. The Grand Prairie is rolling, grassy land with limestone (a soft rock) just under the soil, near Fort Worth. The Cross Timbers are two narrow strips of rugged oak forest with sandy soil. The Rolling Plains, the largest subregion, covers the western part with rolling hills and grassland, near Abilene and Wichita Falls. Waco sits at the region’s southeastern edge, right where it meets the Coastal Plains.',
        'This region has a continental climate, meaning temperatures swing a lot between seasons. Spring brings severe storms and tornado risk. Summers are hot and dry, often over 90°F, while winters can be cold with snow and ice. Bluestem and indiangrass (prairie grasses) grow here, along with live oak, post oak, and mesquite trees. Animals include white-tailed deer, coyotes, bobcats, prairie dogs, and wild turkey.',
        'The fertile (rich, good for growing crops) soil and grasslands make this a great place for ranching and farming. Resources include oil, natural gas, and coal. Many people here work in cattle ranching, dairy farming, factory work, and aerospace and defense work in Fort Worth, plus growing crops like corn, peanuts, wheat, and cotton.'
      ]
    },
    {
      id: 'great-plains',
      shapeId: 'shape-great-plains',
      name: 'Great Plains',
      color: '#e08a3c',
      cities: ['Amarillo', 'Lubbock', 'Midland', 'Odessa', 'San Angelo', 'Del Rio'],
      paragraphs: [
        'The Great Plains region covers the Texas Panhandle and part of Central Texas. This region has two main subregions. The High Plains, also called the Llano Estacado (Spanish for "Staked Plains"), is a huge, flat, high stretch of land in the Panhandle, home to Amarillo, Lubbock, Midland, and Odessa. The Edwards Plateau, known as the Texas Hill Country, has limestone hills, canyons, and natural springs, near San Angelo and Del Rio. Palo Duro Canyon, carved by wind and water, and the Caprock Escarpment (the steep cliff marking the region’s east edge) are found here too. The Colorado and Brazos Rivers both begin in this region.',
        'The climate is semi-arid, meaning it’s fairly dry with low rainfall, but not as dry as a desert. Summers are very hot and dry, often over 100°F, with strong winds and tornado risk in the Panhandle each spring. Winters can bring blizzards, sometimes called "blue northers" (fast-moving cold storms). Short grasses like buffalo grass grow here, along with juniper trees and mesquite. Animals include pronghorn (a fast, deer-like animal), coyotes, jackrabbits, and prairie dogs.',
        'Underground, the Ogallala Aquifer (a huge layer of rock that holds water) supplies water for farming. This region is important for farming, oil and gas, and wind energy. Jobs here include dryland and irrigated farming (irrigated means watered by canals or sprinklers), wind turbine technician work, oil field work, ranching sheep and goats, and tourism in the scenic Hill Country.'
      ]
    },
    {
      id: 'mountains-basins',
      shapeId: 'shape-mountains-basins',
      name: 'Mountains and Basins',
      color: '#c0473f',
      cities: ['El Paso', 'Fort Davis'],
      paragraphs: [
        'The Mountains and Basins region, also called the Trans-Pecos (meaning "across the Pecos River"), is the westernmost and smallest region of Texas. It is the only part of the state with real mountains, including the Guadalupe Mountains, home to Guadalupe Peak — at 8,749 feet, the highest point in Texas. The Davis Mountains and Chisos Mountains are here too. The Rio Grande forms the border with Mexico and has carved deep canyons through the land. Desert basins (low, bowl-shaped stretches of land) sit between the mountain ranges. El Paso is the region’s major city, and this region is home to Big Bend National Park and Guadalupe Mountains National Park.',
        'This region has an arid (very dry), desert-like climate. Summers bring hot days and cool nights, while winters have mild days and cold nights — it can even snow in the mountains. Plants here are adapted to survive with little water, like cacti, creosote bush, mesquite, yucca, and agave. Animals include mule deer, mountain lions, javelinas (wild, pig-like animals), roadrunners, and several kinds of lizards and rattlesnakes.',
        'This region has valuable minerals like limestone, talc, and gypsum, plus stunning desert and mountain scenery. Jobs here include mining, tourism, and trade — El Paso is one of the busiest land ports (a place where goods cross the border by truck or train) in the whole country. Because the land is so dry, only a small amount of ranching happens here.'
      ]
    }
  ]
};
