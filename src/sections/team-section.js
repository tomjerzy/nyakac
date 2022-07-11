/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid} from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function TeamSection({ data }) {
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
            altText={item.f_name}
            title={ item.f_name +' '+item.l_name}
            username={item.username}
            designation={item.title}
            id={item.id}
            social={[
              {path: item.fb, name: 'Facebook', icon: <FaFacebookF />},
              {path: item.ig, name: 'Instagram', icon: <FaInstagram />},
              {path: item.twitter, name: 'Twitter', icon: <FaTwitter />}
            ]}/>
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
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
