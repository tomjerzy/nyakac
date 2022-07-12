/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box} from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import RichardAvatar from 'assets/1657526510863.jpg'
import CyndyAvatar from 'assets/1657532914389.jpeg'
import MaleAvatar from 'assets/male.png'
import FemaleAvatar from 'assets/woman.png'
import ObangeAvatar from 'assets/obange.jpeg'
export default function TeamSection() {
  const data = [
    { id: 1,
      avatar: RichardAvatar,
      name: 'Richard Osungu',
      title: 'Head of operations',
      about: 'Richard Osungu - I am a young development oriented individual. I have initiated and participated in various development projects, now and before. I am graduate of Mathematics (Applied) and Computer Science from Meru University with a certificate in Monitoring and Evaluation from MKU. I am passionate about Data, Research and Monitoring and Evaluation.',
      social:[
              {path: 'https://facebook.com', name: 'Facebook', icon: <FaFacebookF />},
              {path: 'https://instagram.com', name: 'Instagram', icon: <FaInstagram />},
              {path: 'https://twitter.com', name: 'Twitter', icon: <FaTwitter />}
      ]
    },
    { id: 2,
      avatar: CyndyAvatar,
      name: 'Cyndy Nyamolo',
      title: 'Strategic consultant',
      about: 'Cyndy Nyamolo is a young Passionate Woman from North Nyakach Ward, Nyakach Constituency. Cyndy holds a Bachelor \n s Degree in Economics and Statistics from Kenyatta University and has over the years displayed exceptional leadership skills within the organization. She is an ardent crusader of the rights and Responsibilities of Youths and Women and she has hands on experience in matters GBV, Women & Leadership,SRH and MHM. Cyndy looks forward to a creating more safe spaces for Women in her Community.',
      social:[
              {path: 'https://facebook.com', name: 'Facebook', icon: <FaFacebookF />},
              {path: 'https://instagram.com', name: 'Instagram', icon: <FaInstagram />},
              {path: 'https://twitter.com', name: 'Twitter', icon: <FaTwitter />}
      ]
    },
    { id: 3,
      avatar: MaleAvatar,
      name: 'Ochola Komuono',
      title: 'Education coordinator',
      about: 'A teacher and Sexual Reproductive Health and Rights(SRHR) Advocate. ',
      social:[
              {path: 'https://facebook.com/', name: 'Facebook', icon: <FaFacebookF />},
              {path: 'https://instagram.com', name: 'Instagram', icon: <FaInstagram />},
              {path: 'https://twitter.com', name: 'Twitter', icon: <FaTwitter />}
      ]
    },
    { id: 4,
      avatar: FemaleAvatar,
      name: 'Rose Oginga',
      title: 'Head of welfare department',
      about: 'I am an educationist,I love things to do with education and I am passionate about the girl child in the society. My main interest is to witness a society of educated individuals and a safe space for the girl child to be able to express themselves and make it to be successful in life I know it might seem impossible but if we all push from our ends,it is possible.',
      social:[
              {path: 'https://facebook.com/Richard', name: 'Facebook', icon: <FaFacebookF />},
              {path: 'https://instagram.com', name: 'Instagram', icon: <FaInstagram />},
              {path: 'https://twitter.com', name: 'Twitter', icon: <FaTwitter />}
      ]
    },
    { id: 5,
      avatar: MaleAvatar,
      name: 'Felix Akumu',
      title: 'Environmental Specialist',
      about: 'Mr,Akumu Felix- I am and environmental professional experienced in project management, Monitoring and Evaluation and Natural resource management in the development sector. I previously worked for UN Environment, GIZ and Stockholm Environment Institute( Africa Centre). Felix holds a bachelors degree in Environmental studies from Kenyatta University, A Post graduate Diploma in Project Management from KIM and currently pursuing international joint masters degree(Msc) in Environmental science at IHE Delft, Netherlands.',
      social:[
              {path: 'https://facebook.com/', name: 'Facebook', icon: <FaFacebookF />},
              {path: 'https://instagram.com', name: 'Instagram', icon: <FaInstagram />},
              {path: 'https://twitter.com', name: 'Twitter', icon: <FaTwitter />}
      ]
    },
    { id: 6,
      avatar: ObangeAvatar,
      name: 'Jane Alma',
      title: 'Assistant Education Coordinator',
      about: 'Jane Alma is a young an  ambitious lady  who is naturally and a trained educator. I hold a Bachelor of degree in special needs education specializing in sign language. My skill and experience in sign language have always earned me a chance of working with NACC. Besides this I am also an experienced researcher who understands a lot when it comes to the challenges that every society is facing.  Jane is also a professional writer with extensive knowledge, skills and experienced in executing different articles. My articles are always of exceptional high quality, original and unique. I trust and believe that through my articles my society will experience a great change..',
      social:[
              {path: 'https://facebook.com/', name: 'Facebook', icon: <FaFacebookF />},
              {path: 'https://instagram.com', name: 'Instagram', icon: <FaInstagram />},
              {path: 'https://twitter.com', name: 'Twitter', icon: <FaTwitter />}
      ]
    },
    { id: 7,
      avatar: MaleAvatar,
      name: 'Tom Owuor',
      title: 'Technical consultant',
      about: 'Tom possesses a degree in Real Estate from the university of Nairobi and a certification in Telecommunication from CISCO. Tom is currently a real estate consultant with a private company in Nairobi. He is also actively involved in freelance IT consultations',
      social:[
              {path: 'https://facebook.com/Tom Owuor Otema', name: 'Facebook', icon: <FaFacebookF />},
              {path: 'https://instagram.com', name: 'Instagram', icon: <FaInstagram />},
              {path: 'https://twitter.com', name: 'Twitter', icon: <FaTwitter />}
      ]
    }
  ]
  return (
    <section id="team">
     
      <Container>
        <SectionHeader
        slogan="our team"
        title="The most qualified and talented individuals"/>
        <Box sx={{textAlign: 'center'}}>
          {data.map((item) => (
           
            <TeamCard
            key={item.id}
            src={item.avatar}
            altText={item.name}
            title={ item.name}
            designation={item.title}
            about={item.about}
            id={item.id}
            social={item.social}/>
          ))}
        </Box>
      </Container>
    </section>
  );
}
