/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid} from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import RichardAvatar from 'assets/1657526510863.jpg'
import CyndyAvatar from 'assets/1657532914389.jpeg'
import MaleAvatar from 'assets/male.png'
import FemaleAvatar from 'assets/woman.png'
export default function TeamSection() {
  const data = [
    { id: 1,
      avatar: RichardAvatar,
      name: 'Richard Osungu',
      title: 'Head of operations',
      about: 'Richard Osungu (Binsi Mwakolo as he is fondly called) is a young development oriented and energetic youth who has big dreams for his life, that of his family, his neighbors, his community, his Sub County and believes that people deserve a better life. Having grown up entirely in the hands of relatives and largely well wishers, his life has shaped him to be mindful of others and try to make them better in his own small ways. He is a believer in what is right works.',
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
      about: 'A teacher and Sexual Reproductive Health adn Rights(SRHR) Advocate. ',
      social:[
              {path: 'https://facebook.com/Richard', name: 'Facebook', icon: <FaFacebookF />},
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
              {path: 'https://facebook.com/Richard', name: 'Facebook', icon: <FaFacebookF />},
              {path: 'https://instagram.com', name: 'Instagram', icon: <FaInstagram />},
              {path: 'https://twitter.com', name: 'Twitter', icon: <FaTwitter />}
      ]
    },
    { id: 6,
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
        <Grid sx={styles.grid}>
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
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
};
