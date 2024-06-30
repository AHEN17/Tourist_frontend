import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import panamburBeachImage from '../pages/panambur-beach.jpg';
import tannirbhaviBeachImage from '../pages/Tannirbhavi.jpg';
import someshwaraBeachImage from '../pages/Someshwaraa.jpg';
import kudroliTempleImage from '../pages/Kudroli.jpg';
import kadriTempleImage from '../pages/Kadri.jpg';
import mangaladeviTempleImage from '../pages/Mangaldevi.jpg';
import gadaikalluImage from '../pages/Gadaikallu.jpg';
import mountain2Image from '../pages/Narahari.jpg';
import mountain3Image from '../pages/Karinja.jpg';
import kadriHillParkImage from '../pages/Kadri_park.png';
import pilikulaParkImage from '../pages/Pilikula.jpg';
import mallImage from '../pages/Fiza.jpg';
import nisargadhamImage from '../pages/Nisargadham.jpg';
import sultanbattheryImage from '../pages/Sultan.jpg';
import chapelImage from '../pages/Aloy.jpg';
import placeholderImage from '../pages/placeholder.png';

const Destinations = ({ destinations }) => {
  const defaultDestinationSections = [
    {
      id: 1,
      title: 'Beaches',
      destinations: [
        {
          id: 1,
          name: 'Panambur Beach',
          description: 'Panambur Beach is located to the south of Mangalore port. Every year, tonnes of tourists descend on this beach to attend several carnivals which host activities and events such as boat racing, kite flying, making sand sculptures, etc, making it one of the most visited beaches in Mangalore. Although it experiences the most number of visitors, yet, it is also the cleanest beach that one can come across.',
          image: panamburBeachImage,
        },
        {
          id: 2,
          name: 'Tannirbhavi Beach',
          description: 'Tannirbhavi Beach is one of the popular beaches in the city which is quite clean. Proper seats and other facilities make the beach a frequently visited attraction, and it is crowded often on weekends and public holidays. There are lifeguards to keep an eye and rescue in case of an accident, however, visitors are advised to be careful while entering the water.',
          image: tannirbhaviBeachImage,
        },
        {
          id: 3,
          name: 'Someshwara Beach',
          description: 'Someshwara Beach is a rocky beach south of Mangalore. Due to the presence of these rocks and also because of the strong currents, the waters are not ideal for swimming. Another prominent attraction in the vicinity of the beach is the “Ottinene Hill” which is a beautiful vantage point and gives you mesmerising glimpses of the city below, the river Netravati and the big beautiful Arabian Sea.',
          image: someshwaraBeachImage,
        },
      ],
    },
    {
      id: 2,
      title: 'Religious Places',
      destinations: [
        {
          id: 5,
          name: 'Kudroli Gokarnath Temple',
          description: 'Kudroli Gokarnath Temple is a prominent Hindu temple located in Mangalore, Karnataka, India. Dedicated to Gokarnanatheshwara, a form of Lord Shiva, the temple was founded by Narayana Guru in 1912 and is managed by the Billava community. Known for its beautiful architecture and cultural significance, the temple complex features a blend of traditional and modern design elements, including grand gopurams (towering gateways) and intricate carvings.',
          image: kudroliTempleImage,
        },
        {
          id: 6,
          name: 'Kadri Manjunatha Temple',
          description: 'Kadri Manjunatha Temple is a historic temple in Mangalore in the state of Karnataka, India. The incharge and priests in the temple are Shivalli Madhva Brahmins.In front of the temple, at a height there are a number of water ponds. There is a garden surrounding the ponds. When one walks down from there in front of the temple is a huge lightpole. During karthika maasa, deepothsava is held here. There are statues of Machendranath, Gorakanath, Shringinath, Lokeshwara, Manjushri, and Buddha in the temple.',
          image: kadriTempleImage,
        },
        {
          id: 7,
          name: 'Mangaladevi Temple',
          description: 'This temple is made to honour goddess Mangaladevi, a form of goddess Durga. It was built in 9000 AD and has amazing architecture spanning over acres of land. It offers all the pilgrims a site to worship their dear goddess and honour her in their own ways. The temple is just 22 minutes away from the city.',
          image: mangaladeviTempleImage,
        },
      ],
    },
    {
      id: 3,
      title: 'Mountains',
      destinations: [
        {
          id: 15,
          name: 'Gadaikallu',
          description: 'Gadaikallu, also known as Gadaikallu Belthangady, is a small village located in the Belthangady taluk of the Dakshina Kannada district in the state of Karnataka. Situated amidst the picturesque Western Ghats, Gadaikallu is known for its natural beauty, rich cultural heritage, and historical significance.A total of 1876 steps take trekkers from the base to the summit. These steps are cut out of the granite hill. At the top stands the remains of the Jamalabad Fort and a breath-taking view of the Kudremukh range. It’s categorized as a medium-level trek. It can be quite a long trek to make sure you carry plenty of water and snacks with you.',
          image: gadaikalluImage,
        },
        {
          id: 16,
          name: 'Narahari Parvatha',
          description: 'Narahari Parvatha is located on National Highway 48, which connects Mangalore to Bangalore. It is 28 Kilometers away from Mangalore and takes about 45 minutes by drive to reach the destination. Once you reach B C road, it is 2 kilometers away from B C Road junction. Continue on the highway till you spot the temple entrance on your right hand side with words written in Kannada that say ‘Shri Narahari Parvatha Sadhashiva Devasthana’. Take the steep slope which ends at a flight of stairs which takes you all the way up to the temple.',
          image: mountain2Image,
        },
        {
          id: 17,
          name: 'Sri Karinjeshwara Temple',
          description: 'Sri Karinjeshwara Temple is Hindu Temple, a famous Lord Shiva temple located Karinja in Bantwala Taluk, Kavalamudur Village, Dakshina Kannada, Karnataka, India. This temple is situated on the peak of Karinja Hill, about 1000 feet above sea level in Kodyamale hills, Karinjeshwara.There are about 600 steps to reach this temple. This temple has two parts- one is lord Shiva is on the top of a cliff and the other is for the Goddess Parvati and Lord Ganesha in the middle of the way to the hill. There are ponds named Gadha teertha at hill bottom, Ungusta theerta at hill middle.',
          image: mountain3Image,
        },
      ],
    },
    {
      id: 4,
      title: 'Parks',
      destinations: [
        {
          id: 18,
          name: 'Kadri Hill Park',
          description: 'What makes Mangalore a city par excellence is the many parks and garden inside and outside the city limits. One such park is the Kadri Hill Park. This park provide for families to visit and spend quality time in the midst of greenery and natural atmosphere.',
          image: kadriHillParkImage,
        },
        {
          id: 19,
          name: 'Pilikula Park',
          description          : 'The Pilikula Park is situated at a distance of about 11-12 kms to the north of Mangalore and is also called the Nisarga Dham. This is an integrated park too and the word Pilikula is derived from the Pilikula lake. This lake is so called because the word Pilikula means where tiger comes. It is recorded that in a time past, when the tiger population here was substantial, they actually came to drink water at this lake. This massive park spans an area of about 350 acres and is a regular favourite with tourist and the city dwellers. There are a number of attractions here which are the aquarium, the Botanical Park, and gold course.',
          image: pilikulaParkImage,
        },
        {
          id: 20,
          name: 'Dr. Shivarama Karantha Pilikula Nisarga Dham',
          description: 'Dr. Shivarama Karantha Pilikula Nisarga Dhama is an integrated theme park that promotes eco-education and tourism. The biggest attraction here is Pilikula Lake along with Biological Park, Heritage Village/Artisan Village Complex, Arboretum preserving more than 235 endangered plant species and a Golf Club – the first in Mangalore. Lake garden, children’s park, walking and jogging paths, boating facility, etc. are also available here, apart from the famous Manasa Amusement and Water Park that make for an ideal picnic spot.',
          image: nisargadhamImage,
        },
      ],
    },
    {
      id: 5,
      title: 'Other places to visit',
      destinations: [
        {
          id: 21,
          name: 'St. Aloysius Chapel',
          description: 'St Aloysius Chapel, built in 1885, is an important chapel for followers of Christianity in Mangaluru, a Coastal city of Karnataka. A line of circular pillars holds aloft an arched ceiling. Oil paintings on canvas bonded to the ceiling depict the life of Aloysius Gonzaga to whom the chapel is dedicated. The Chapel also has beautiful paintings done by Br. Anthony Moschemi of Italy.History of St Aloysius Chapel, Mangaluru: St Aloysius Chąpel was built as a part of Christian mission in South India. St Aloysius Chapel is part of St Aloysius college campus and part of an initiative to serve the healthcare, education and social welfare needs of the community.',
          image: chapelImage,
        },
        {
          id: 22,
          name: 'Sulthan Bathery',
          description: 'Tipu Sultan constructed this fort-like structure to keep a look at the warships entering the kingdom through the Gurpur River. The battery, which was unable to withstand the ruins of time and water, is almost in ruins now. It offers a great spot to click pictures and is visited by many people daily. You can reach the location in 15 minutes via car or bus.',
          image: sultanbattheryImage,
        },
        {
          id: 23,
          name: 'Forum Fiza Mall',
          description: 'Forum Fiza Mall is the biggest mall in Mangalore. You can find various brands like Spar Hypermarket, Planet Fashion, Shoppers Stop, etc. It also has a parking facility that is very well organized. You will find some high brands like Tissot, CK, and other international brands. The food court is decent, although it does have McDonalds. You can also find a play zone on the top floor for kids!',
          image: mallImage,
        },
      ],
    },
  ];

  // Combine default destinations with the passed destinations prop
  const combinedDestinations = defaultDestinationSections.map((section) => {
    const additionalDestinations = destinations.filter((dest) => dest.sectionId === section.id);
    return {
      ...section,
      destinations: [...section.destinations, ...additionalDestinations],
    };
  });

  return (
    <Container className="mt-5">
      <h1>Destinations</h1>
      {combinedDestinations.map((section) => (
        <div key={section.id} className="mb-5">
          <h2>{section.title}</h2>
          <Row>
            {section.destinations.map((destination) => (
              <Col key={destination.id} lg={4} md={6} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={destination.image || placeholderImage} alt={destination.name} />
                  <Card.Body>
                    <Card.Title>{destination.name}</Card.Title>
                    <Card.Text>{destination.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Destinations;

