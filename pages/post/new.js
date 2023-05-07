import { withPageAuthRequired } from '@auth0/nextjs-auth0';
export default function NewPost() {
  return <div>new</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
