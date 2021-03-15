import Articles from '../components/Articles/Articles';
import Users from '../components/Users/Users';
import Grid from '../components/layout/Layout/Grid';

export default function Home() {
  return <Grid left={<Articles />} right={<Users />} />;
}
