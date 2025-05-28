import Welcome from "../componeents/Welcome";
import First from "../First";
import Layout from "../Layout/Layout";


function Home() {
  return (
    <Layout>
      <div className='container'>
        <Welcome name="saravanan"/>
      <First />
      </div> 
    </Layout>
  );
}

export default Home;
