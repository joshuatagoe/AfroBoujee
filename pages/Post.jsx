import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

export default class Post extends React.Component{ 
  render(){
    return(
      <Layout>
        <h1>{this.props.show.name}</h1>
        <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={this.props.show.image.medium} />
    </Layout>
    )
  }
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};
